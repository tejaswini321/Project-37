class Game{
    constructor(){
        this.bedroom = loadImage("bg2.png");
        this.background = loadImage("background.png");
        this.image = loadImage("living room.png");
        this.lazy = loadImage("lazy.png");
        this.bg = loadImage("bg3.png");
        this.bg1 = loadImage("bg4.png");
        this.happyDog = loadImage("happydog.png");
        this.garden = loadImage("Garden.png");
        this.washroom = loadImage("Washroom.png");
        this.routine = loadImage("dogVaccination.png")

        feedButton = createButton("Feed your dog");
        feedButton.position(700, 95);
        
        addButton = createButton("Add Food");
        addButton.position(820, 95);

        button = createButton("Play");
        button.position(700,300);
        
    }
    getState(){
        readState = database.ref('gameState');
        readState.on('value',function(data){
            gameState = data.val();
        });
    }
    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }
    display(){
       
        if(gameState === "Start"){
            dog.addImage(dog1);
            dog.scale = 0.5;
            button.hide();

            imageMode(CENTER);
            image(this.background,400,250,800,500);
            
            if(keyCode === 39){
                imageMode(CENTER);
                image(this.bedroom,400,250,800,500);
                button.hide();
            }
            if(keyCode === 83){
                imageMode(CENTER);
                image(this.bg,400,250,800,500);
                image(this.lazy,400,300);
                button.hide();
           }

            if(keyCode === 80){
                image(this.bg1,400,250,800,500);
                button.mousePressed(mousePressed);
                button.show();
            }

            feedButton.hide();
            addButton.hide();

            if(keyCode === 32){
                imageMode(CENTER);
                image(this.image,400,250,800,500);
                dog.visible = false;
                button.hide();
            }
        }

        if(gameState === "Play"){
            feedButton.show();
            addButton.show();
            button.hide();

            imageMode(CENTER);
            image(this.happyDog,400,350,250,250);

             feedButton.mousePressed(feedDog)

             addButton.mousePressed(function(){
                foodS++;
                foodObj.updateFoodStock(foodS);
              });
              
            if(foodS === 0){
                gameState = "End";
            }
        }

        if(gameState === "End"){
            imageMode(CENTER);
            image(this.garden,400,250,800,500);
            button.hide();
            feedButton.hide();
            addButton.hide();

            if(keyCode === 66){
                imageMode(CENTER);
                image(this.washroom,400,250,800,500);
            }
            if(keyCode === 82){
                imageMode(CENTER);
                image(this.routine,400,250,800,500);
            }
        }

    }
            
}