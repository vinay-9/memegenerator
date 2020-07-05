import React, { Component } from 'react';
class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = { 
            TopText :"",
            bottomText:"",
            randomImg:"http://i.imgflip.com/1bij.jpg",
            allMemeImgs:[]
         }
    }

     componentDidMount(){
         fetch("https://api.imgflip.com/get_memes")
         .then(response=>response.json())
         .then(response=>{
             const {memes}=response.data;
             console.log(memes);
             this.setState
             ({
                 allMemeImgs:memes
             })
            })
     }

       handleClick=(event)=>{
           event.preventDefault();
           const random =Math.floor(Math.random()*this.state.allMemeImgs.length);
           const randomMemeImg =this.state.allMemeImgs[random].url;
           this.setState({
               randomImg:randomMemeImg
           })
       }


      handlechange=(event)=>{
             console.log("working");
             const {name ,value }= event.target;
             this.setState({
                 [name]:value
                 // [event.target.name ]=event.target.value
             })
     }
    render() { 
        return ( 
            <div>
            <script crossOrigin></script>
            <form className="meme-form">
         <h1> MemeGenerator Section</h1>


         <input  onChange={this.handlechange} 
          name = "TopText" 
          value={this.state.TopText} 
          type="text" 
          style={{
              borderColor:"black",
              borderRadius:"5px",
               borderTopColor:"white",
               borderWidth:"4px",
               marginRight:"38px"}}>
         </input>


         <input  
         onChange={this.handlechange} 
         value={this.state.bottomText}   
         name = "bottomText" 
         type="text"
         style={{
             borderColor:"black",
             borderRadius:"5px", 
             borderTopColor:"white",
             borderWidth:"4px"}}>
        
         </input>


         <button style={{ marginLeft: "10px", background:"orange" ,position:"absolute"}} onClick={this.handleClick}>Gen</button>
         </form>

         <div className="meme">
         <br></br>
                
            <img  
            style ={ { height: "300px", width :400 ,position:"absolute" , borderColor:"black", display:"flex"}}
            src ={this.state.randomImg} 
            alt ="not found "/>

            
         <div className ="top">{this.state.TopText}</div>
         <div className ="bottom">{this.state.bottomText}</div>
         
         
         </div>
         </div>
         );
    }
}
 
export default MemeGenerator;