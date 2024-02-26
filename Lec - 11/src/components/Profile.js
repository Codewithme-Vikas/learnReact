import React from "react";

class Profile extends React.Component {

    // The constructor runs before your class component mounts (gets added to the screen).
    // Constructor is the only place where you can assign this.state directly.
    // In all other methods, need to use this.setState() instead.
    // Do not call setState in the constructor.

    // Ctor used to declare state and bind your class methods to the class instance:
    constructor(props) {
        // Inside a constructor, you need to call super(props) before any other statement. If you don’t do that, this.props will be undefined while the constructor runs, which can be confusing and cause bugs.
        super(props); // child access parent props and vice verca

        this.state = {
            count: 0,
            count2: 10
        }
        console.log("ctor of profile")
        // this.setCount2 = this.setCount2.bind(this) // need to bind normal function not arrow fun.
    }

    // setCount2(){
    //     this.setState({
    //         count2 : 20,
    //     })
    // };

    setCount2 = () => { // arrow function automatically captures the this value from the class instance.
        this.setState({
            count2: 20
        })
    };


    componentDidMount() { // React will call it when component is mounted.
        // best place to call API
        console.log("component mounted")
        this.timer = setInterval( ()=>{
            console.log("interval timer")
        },1000);
    }

    componentDidUpdate(prevProps, prevState) { //  React will call it immediately after component has been re-rendered with updated props or state.
        console.log("update state/props")
        // conditional run code - like useEffect depandency array
        if (
            this.state.count !== prevState.count ||
            this.state.count2 !== prevState.count2
        ) {
            // do something
        }
    }

    componentWillUnmount() { //  React will call it before component is removed (unmounted) from the screen.
        console.log("component will unmount ")
        clearInterval(this.timer);  
    }


    render() {
        console.log("render fo profile ");
        const { count } = this.state; // destructing
        return (
            <div>
                <h2>This is profile class basedcomponent </h2>
                {/* this.props => for getting props */}
                <h1> Name : {this.props.name}</h1>
                <p>{count}</p>
                <p>{this.state.count2}</p>

                {/* update the state - count variable */}
                <button
                    onClick={() => {
                        this.setState({
                            count: 1,
                        })
                    }}
                >
                    Click
                </button>

                <button onClick={this.setCount2}>Click</button>
            </div>
        )
    }
};


export default Profile;