import React from 'react'
import { Button, Comment, Form } from 'semantic-ui-react'

class CommentsThread extends React.Component{
    
    // const data = [
    //     {
    //         user: "Joe Henderson",
    //         time: "1 day ago",
    //         text: "The hours, minutes and seconds stand as visible reminders that your effort put them all \
    //         there. Preserve until your next run, when the watch lets you see how Impermanent your efforts \
    //         are."
    //     },
    //     {
    //         user: "Christian Rocha",
    //         time: "2 days ago",
    //         text: "I re-tweeted this."
    //     }
    // ];

    // let datas = []

    // fetch("http://localhost:3002/comments")
    // .then( resp => resp.json())
    // .then( data => datas = this.comments(data))
    // .then(console.log);

    constructor(props){
        super(props);
        this.state = {
            comments: this.props.comments
        }
    }

    createComments = (com) => {
        if (!com) return (<h1> Loading Comment</h1>);
        return com.map( (obj, ind)=> {
            return (
                <Comment key = {ind}>
                <Comment.Avatar as='a' src='./favicon.ico' />
                <Comment.Content>
                    <Comment.Author>{obj.username}</Comment.Author>
                    <Comment.Metadata>
                    <div>{obj.createdtime}</div>
                    </Comment.Metadata>
                    <Comment.Text>
                    {obj.comment}
                    </Comment.Text>
                    <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
                </Comment>
            )
        })
    }
    
    render(){
        return (
            <Comment.Group>
                {this.createComments(this.props.comments)}
                <Form reply>
                <Form.TextArea />
                <Button content='Add Comment' labelPosition='left' icon='edit' primary />
                </Form>
            </Comment.Group>
        )
    }
}

export default CommentsThread;
