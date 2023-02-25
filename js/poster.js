AFRAME.registerComponent("poster", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards();
    },
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "batman",
          title: "Batman",
          url: "./assets/thumbnails/Batman.jpeg",
        },
        {
          id: "iron-man",
          title: "Iron Man",
          url: "./assets/thumbnails/Iron Man.jpg",
        },
  
        {
          id: "Spiderman",
          title: "Spiderman",
          url: "./assets/thumbnails/Spiderman.jpeg",
        },
        {
          id: "Superman",
          title: "Superman",
          url: "./assets/thumbnails/Superman.jpeg",
        },
      ];
  
      let previousXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = previousXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        previousXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id);
  
        // Thumbnail Element
        const thumbNail = this.createThumbNail(item);
        borderEl.appendChild(thumbNail);
  
        // Title Text Element
        const titleEl = this.createTitleEl(position, item);
        borderEl.appendChild(titleEl);
  
        this.placesContainer.appendChild(borderEl);
      }
    },
  
    createBorder: function (position, id) {
      const entityID = document.createElement("a-entity");
      entityID.setAttribute("id", id);
      entityID.setAttribute("visible", true);
      entityID.setAttribute("geometry", {
        primitive: "plane",
        width: 22,
        height: 30
      });
      entityID.setAttribute("position", position);
      entityID.setAttribute("material", { color: "#0077cc", opacity: 1, });
      return entityID;
    },
  
    createThumbNail: function (item) {
      const entityID = document.createElement("a-entity");
      entityID.setAttribute("visible", true);
      entityID.setAttribute("geometry", { primitive: "plane", width: 20, height: 28 });
      entityID.setAttribute("material", { src: item.url });
      entityID.setAttribute("position", {x: 0, y: 0, z: 0.1});
  
      return entityID;
    },
  
    createTitleEl: function (position, item) {
      const entityID = document.createElement("a-entity");
      entityID.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width: 70,
        color: "#e65100",
        value: item.title,
      });
      const elPosition = position;
      elPosition.y = -20;
      entityID.setAttribute("position", position);
      entityID.setAttribute("visible", true);
      return entityID;
    },
  });
  