import React from 'react';
import Header from './Header.js'
import Action from './Action.js'
import AddOption from './AddOption.js'
import Options from './Options.js'
import OptionModal from './OptinModal.js';

export default class IndecisionApp extends React.Component{
    state = {options:this.props.options,
    selectedOption: undefined};
    
    constructor(props){
        super(props);
        //this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        //this.handleRandomPick = this.handleRandomPick.bind(this);
        //this.handleAddOption = this.handleAddOption.bind(this);
        //this.handleDeleteOption = this.handleDeleteOption.bind(this);
        //this.state = {
        //    options:props.options
       // }
    }

    componentDidMount(){
        console.log("component did mount !")

        try{
            const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options){
            this.setState(()=>({options:options}));
        }
        }catch (e){
            //DO nothing
        }
        
        
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log("component did update !");
        if(prevState.options.length != this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount(){
        console.log("component will unmount")
    }
    handleDeleteOptions = ()=>{
        this.setState({options:[]})
    }
    handleRandomPick = ()=>{
        const rand = Math.floor(Math.random()*(this.state.options.length));
        const rem = this.state.options[rand];
        this.state.selectedOption = rem;
        this.setState((prevState)=>{
            return {
                options: prevState.options.splice(rand)
            }
        })
    }
    handleDeleteOption = (optionToRem)=>{
       this.setState((prevState)=>{
           return {               
                   options: prevState.options.filter((option)=>{
                       return option !== optionToRem
                   })
               }
           
       })
      
    }
    handleAddOption = (newItem)=>{
        //this.state.options.push(newItem);
        //alert(newItem)
        if(!newItem){
            return 'Enter valid data';
        }else if(this.state.options.indexOf(newItem)>-1){
            return 'this option exists !!!'
        }
        this.setState((prevState)=>{
            return {
                options:prevState.options.concat([newItem])
            }
        })
    }

    handleClearSelectedOption = ()=>{
        this.setState(()=>({selectedOption: undefined}));
        
    }
    render(){
        const title = "IndecisionApp";
        const subTitle = "Put your life in hands of a computer";
        //const options = ['One', 'Two', 'Four'];

        return(
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action hasOptions={this.state.options.length>0} 
                    handleRandomPick={this.handleRandomPick}
                />
                <Options options={this.state.options} 
                handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                />
            </div>
        )
    }
}
IndecisionApp.defaultProps = {
    options: ['one','22']
}


