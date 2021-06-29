import { Component } from "react";
import consts from './const';
import { CometChatUI } from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src/components/index"

export default class CometChatNoSSR extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined
        }
    }
    componentDidMount() {
      
      /**
      Initialize CometChat
      */
      let appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(consts.REGION).build();
      CometChat.init(consts.APP_ID, appSetting).then(
        () => {
          
          /**
          *Log in user
          */
         const getUser = JSON.parse(localStorage.getItem('user'));
          const UID = getUser.uid;
          const authKey = consts.AUTH_KEY;
          CometChat.login(UID, authKey).then(
            user => {
              this.setState({ user })
            },
            error => {
              console.log("Login failed with exception:", {
                error
              });
            }
          );
        },
        error => {
          console.log("Initialization failed with error:", error);
          // Check the reason for error and take appropriate action.
        }
      );
    }
    render() {
        /**
        Rendering CometChatUI  component of React UIKit
        **/
        if (this.state.user) {
            return (
                <div style={{ width: "100vw", height: "100vh" }}><CometChatUI /></div>
            );
        } else {
            return (<div>Laoding...</div>);
        }
    }
}