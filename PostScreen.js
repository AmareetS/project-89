export default class PostScreen extends Component {
    renderItem=({item:post})=>{
        return<PostCard post={post} navigation={this.props.navigation}/>
    }
    fetchUser = () => {
        let theme;
        firebase
            .database()
            .ref("/users/" + firebase.auth().currentUser.uid)
            .on("value", (snapshot) => {
                theme = snapshot.val().current_theme
                this.setState({light_theme: theme === "light"})
            })
    }
 }
