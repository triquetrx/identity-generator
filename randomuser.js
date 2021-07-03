const app=Vue.createApp({
    data(){
        return{
            picture:"https://randomuser.me/api/portraits/men/90.jpg",
            firstName:"Zaid",
            lastName:"Khan",
            email:"zdkhan0786@gmail.com",
            phone:"+91-111 222 3333",
            street:"Street Name",
            city:"City Name",
            state:"State Name",
            pincode:"444000",
            userid:"user__id",
            password:"pa$$word",
            gender:"male",
        }
    },
    props:{
        type: {
            type: String,
            default: 'Zaid'
          },
          size: {
            type: String,
            default: '12'
          },
          characters: {
            type: String,
            default: 'a-z,A-Z,0-9,#'
          },
          placeholder: {
            type: String,
            default: 'Password'
          },
          auto: [String, Boolean],
          value: ''
        },
        data: function() {
            return {
            password: this.value
        }
    },
    methods: {
        async getUser(){
            const res =await fetch('https://randomuser.me/api')
            const{ results } =await res.json()

            this.firstName=results[0].name.first
            this.lastName=results[0].name.last
            this.email=results[0].email
            this.phone=results[0].cell
            this.picture=results[0].picture.large
            this.userid=results[0].login.username
            this.street=results[0].location.street.name
            this.city=results[0].location.city
            this.state=results[0].location.state
            this.pincode=results[0].location.postcode
            this.gender=results[0].gender
            let charactersArray = this.characters.split(',');  
            let CharacterSet = '';
            let password = '';    
            if( charactersArray.indexOf('a-z') >= 0) {
              CharacterSet += 'abcdefghijklmnopqrstuvwxyz';
            }
            if( charactersArray.indexOf('A-Z') >= 0) {
              CharacterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            }
            if( charactersArray.indexOf('0-9') >= 0) {
              CharacterSet += '0123456789';
            }
            if( charactersArray.indexOf('#') >= 0) {
              CharacterSet += '![]{}()%&*$#^<>~@|';
            }
            for(let i=0; i < this.size; i++) {
              password += CharacterSet.charAt(Math.floor(Math.random() * CharacterSet.length));
            }
            this.password = password;
        }
    },
})
app.mount('#app')