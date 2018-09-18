/* global window, document */
/*eslint quotes: ["error", "double", { "avoidEscape": true }]*/

"use strict";

class Users {
  constructor(element) {
    this.settings = [];
    this.sortSelected = "added";
    this.filterSelected = null;

    this.displayAttributes = ["market", "company_size", "location", "story"];

    this.filterOptions = [
      {
        label: "Consumer",
        id: "market",
        value: /(Games|Social Media|Mobile|News)/i,
      },
      {
        label: "Enterprise",
        id: "market",
        value: /Enterprise/i,
      },
      {
        label: "Open Source",
        id: "open_source",
      },
      {
        label: "Sponsor",
        id: "sponsor",
      },
      {
        label: "Contributor",
        id: "contributor",
      },
      {
        label: "Blog",
        id: "story",
      },
    ];

    this.container = element;

    this.render();
  }

  render() {
    this.settings = this.container.dataset; // must support data-[*]

    if (!this.settings || this.settings.rendered === true) {
      return;
    }

    // check browser compatability
    if (!window.addEventListener || !window.JSON) {
      return;
    }

    this.container.setAttribute("data-rendered", true);

    this.renderList();
  }

  renderList() {
    const list = document.createElement("ul");
    const userTemplate = `
              <div class="\${className}">
                <a href="\${url}" target="_blank">
                    <img class="logo" src="/img/users/\${logo}">
                    <div class="name">\${name}</div>
                </a>
                <div class="attributes">
                    \${attributes}
                </div>
              </div>`;
    this.container.innerHTML = ""; // empty block
    this.container.appendChild(this.renderHeader());

    if (this.settings.users) {
      let users = {};
      try {
        users = JSON.parse(this.settings.users);
      } catch (e) {
        return;
      }

      // sort (@todo, need key), filter and map
      users
        .filter(user => {
          // check if we need to filter
          if (this.filterSelected !== null) {
            if (!user.attributes) {
              return false;
            }
            const filterThis = Object.entries(user.attributes).find(
              attribute => {
                if (
                  this.filterSelected.id === attribute[0] &&
                  ((!this.filterSelected.value && attribute[1]) ||
                    this.filterSelected.value.test(attribute[1]))
                ) {
                  //no match for filter
                  return true;
                }
                return false;
              }
            );
            // no match for filter
            if (filterThis === undefined) {
              return false;
            }
          }

          return true;
        })
        .map(user => {
          const prepare = [];

          prepare.className = user.logoIcon ? "holder icon" : "holder";
          prepare.attributes = this.displayAttributes
            .map(displayAttribute => {
              if (!user.attributes) {
                return;
              }
              //match displayAttribute with user.attribute
              const value = user.attributes[displayAttribute];
              if (!value) {
                return;
              }
              // @todo: new, hiring,
              if (displayAttribute === "story") {
                return (
                  '<div><a href="' +
                  value +
                  '" target="_top">Read Story</a></div>'
                );
              } else {
                return "<div>" + value + "</div>";
              }
            })
            .join("");

          let template = this.template(userTemplate, prepare); // prepare
          template = this.template(template, user); // user

          const li = document.createElement("li");
          li.innerHTML = template;
          list.appendChild(li);
        });
    }

    // add your company
    const positions = [6, 25, 50];
    positions.forEach(pos => {
      if (list.childElementCount > pos) {
        list.insertBefore(this.renderAdd(), list.children[pos]);
      }
    });

    // render
    this.container.appendChild(list);
  }

  renderHeader() {
    const div = document.createElement("div");
    div.className = "filter";

    this.filterOptions.map((filter, i) => {
      const dot = document.createElement("span");
      dot.innerHTML = " &middot; ";

      const a = document.createElement("a");
      a.className = this.filterSelected === filter ? "active" : "";
      a.innerHTML = filter.label;
      a.href = "#";
      a.addEventListener("click", event => {
        event.preventDefault();
        this.filterSelected = filter;
        this.renderList();
      });
      i > 0 && div.appendChild(dot);
      div.appendChild(a);
    });
    return div;
  }

  renderAdd() {
    const li = document.createElement("li");
    li.className = "action";

    const button = document.createElement("button");
    button.innerHTML = "Add your company";
    button.addEventListener("click", event => {
      event.preventDefault();
      window.open(
        "https://github.com/babel/website/edit/master/website/data/users.js"
      );
    });
    li.appendChild(button);
    return li;
  }

  template(template, data) {
    const keyTemplate = "\\${key}";
    return (Object.keys(data) || []).reduce((template, key) => {
      const val =
        data[key] !== undefined && data[key] !== null ? data[key] : "";
      return template.replace(
        new RegExp(keyTemplate.replace("key", key), "gi"),
        val
      );
    }, template);
  }

  arrayize(obj) {
    return Object.keys(obj).map(key => {
      const item = obj[key];
      item._key = key;
      return item;
    });
  }
}

[...document.querySelectorAll(".users")].forEach(elem => new Users(elem));
