AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemID: { defautlt: "", type: "string" },
    },
  
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
  
    handlePosterListState: function () {
      const id = this.el.getAttribute("id");
      const placesId = ["batman", "iron-man", "Spiderman", "Superman"];
  
      if (placesId.includes(id)) {
        const placesContainer = document.querySelector("#places-container");
        placesContainer.setAttribute("cursor-listener", { selectedItemID: id });
        this.el.setAttribute("material", { color: "#b76b30", opacity: 1 });
      }
    },
  
    handleMouseEnterEvents: function () {
      this.el.addEventListener("mouseenter", () => {
        this.handlePosterListState();
      });
    },
  
    handleMouseLeaveEvents: function(){
        this.el.addEventListener("mouseleave", ()=>{
            const {selectedItemID} = this.data
            if (selectedItemID){
                const el = document.querySelector(`#${selectedItemID}`)
                const id = el.getAttribute('id')
  
                if(id == selectedItemID){
                    el.setAttribute('material', {color: '#0077cc', opacity: 1})
                }
            }
        })
    }
  });
  