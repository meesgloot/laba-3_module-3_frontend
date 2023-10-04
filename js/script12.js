const App = {
    data(){
        return{
           visible: false,
           play: null,
           player1: '',
           player2: '',
           item1: '',
           item2: '',
           war: 0,
           magazine:[],
           win: ''
        }
    },
    mounted() {                                 // кто я?
        console.log('mounted', this.$el.textContent) 
    },
    updated(){
        console.log('updated')
    },    
    destroyed(){
        alert(win + " победил!")
    },
  
    methods:{
        start(){
            this.visible = true;
            let random = Math.floor(Math.random() * (20-10) + 10);
            this.play = {
                User: {
                    health: random,
                    name: this.player1 //видит его в name 1, а тут слепой
                },
                Enemy: {
                    health: random,
                    name: this.player2 //аналогично
                }
            }
        },
        name1(event){
            this.player1 = event.target.value;
            this.item1 = '<button class="button">Сражение ' + this.player1  + '</button>';
        },
        name2(event){
            this.player2 = event.target.value;
            this.item2 = '<button class="button">Сражение ' + this.player2  + '</button>';
        },
        boomName1(){
            war = Math.floor(Math.random() * (5 - 1) + 1);

            if(this.play.Enemy.health > 0){
                this.play.Enemy.health -= war;

                if(this.play.Enemy.health <= 0){
                    this.play.Enemy.health = 0;
                   
                    this.magazine.push(this.player1 + ' победил ' + this.player2 + ' ,имея ' + this.play.User.health + ' очков здоровья.')
                    win = this.player1;
                    this.item2 = '';
                    alert(this.player1 + " победил!")
                }
                this.magazine.push(this.player1 + ' нанес ' + war + ' урона ' + this.player2 + '. ' + this.player2 + ' имеет ' + this.play.Enemy.health + ' очков здоровья.')
            }

            

        },
        boomName2(){
            war = Math.floor(Math.random() * (5 - 1) + 1);

            if(this.play.User.health > 0){
                this.play.User.health -= war;

                if(this.play.User.health <= 0){
                    this.play.User.health = 0;
                    
                    this.magazine.push(this.player2 + ' победил ' + this.player1 + ' ,имея ' + this.play.Enemy.health + ' очков здоровья.')
                    win = this.player2;
                    this.item1 = '';
                    alert(this.player2 + " победил!")
                }
                this.magazine.push(this.player2 + ' нанес ' + war + ' урона ' + this.player1 + '. ' + this.player1 + ' имеет ' + this.play.User.health + ' очков здоровья.')
        
            }
        }
    },
  
   
}
Vue.createApp(App).mount('#play')
