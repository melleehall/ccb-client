import React, { Component } from 'react'
import './SignupForm.css'


export default class AddFolder extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: '',
                touched: false
            },
            content: {
                value: '',
                touched: false
            },
            folderID: {
                value: '',
                touched: false
            },
            error: false,
        }
    }

    updateName(name) {
        this.setState({ name: { value: name, touched: true }});
    }

    updateContent(content) {
        this.setState({ content: { value: content, touched: true }});
    }

    updateFolder(folderID) {
        this.setState({ folderID: { value: folderID, touched: true }});
    }

    validateName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return 'Name is required';
        }  else if (name.length < 2) {
            return 'Name must be at least 2 characters long'
        } 
    }

    validateContent() {
        const content = this.state.content.value.trim();
        if (content.length === 0) {
            return 'Content is required';
        } else if (content.length < 10) {
            return 'Content must be at least 10 characters long'
        }
    }

    validateFolder(folder) {
        const folderID = this.state.folderID.value;
        if (folderID === "" || folderID === "Please, select a folder.") {
            return 'Must select an existing folder for this note.'
        }
        
    }

    renderErrorMessage() {
        const errorStat = this.state.error;
        if (errorStat) {
            return 'We are experiencing an issue adding your note.  Please, try again later and contact your administrator if the issue persists.'
        }
    }
       
    


    render () {
        // const nameError = this.validateName();
        // const contentError = this.validateContent();
        // const folderError = this.validateFolder();
        // const fetchError = this.renderErrorMessage();

        return (
            <section className='signup_form_container'>
                <h2>Sign Up Today</h2>
                    <form className='add_note_form' onSubmit={e => this.handleSubmit(e)}>
                        <div className='signup_fields'>
                            <fieldset className='personal_info'>
                                <label htmlFor='new-note-name'>
                                    First Name
                                </label>
                                <input type='text' name='new-note-name' id='new-note-name'
                                    onChange={e => this.updateName(e.target.value)}/>
                                {/* {this.state.name.touched && <ValidationError message={nameError} />} */}
                                <label htmlFor='new-note-content'>
                                    Last Name
                                </label>
                                <input type='text' name='new-note-content' id='new-note-content'
                                    onChange={e => this.updateContent(e.target.value)}/>
                                {/* {this.state.content.touched && <ValidationError message={contentError} />} */}
                                <label htmlFor='new-note-name'>
                                    Email Address
                                </label>
                                <input type='text' name='new-note-name' id='new-note-name'
                                    onChange={e => this.updateName(e.target.value)}/>
                                {/* {this.state.name.touched && <ValidationError message={nameError} />} */}
                                <label htmlFor='new-note-name'>
                                    Phone Number
                                </label>
                                <input type='text' name='new-note-name' id='new-note-name'
                                    onChange={e => this.updateName(e.target.value)}/>
                                {/* {this.state.name.touched && <ValidationError message={nameError} />} */}
                                <label htmlFor='new-note-name'>
                                    Street Number
                                </label>
                                <input type='text' name='new-note-name' id='new-note-name'
                                    onChange={e => this.updateName(e.target.value)}/>
                                {/* {this.state.name.touched && <ValidationError message={nameError} />} */}
                            </fieldset>
                            <fieldset class='address'>
                                <label htmlFor='new-note-name'>
                                    Street Name
                                </label>
                                <input type='text' name='new-note-name' id='new-note-name'
                                    onChange={e => this.updateName(e.target.value)}/>
                                {/* {this.state.name.touched && <ValidationError message={nameError} />} */}
                                <label htmlFor='new-note-name'>
                                    City
                                </label>
                                <input type='text' name='new-note-name' id='new-note-name'
                                    onChange={e => this.updateName(e.target.value)}/>
                                {/* {this.state.name.touched && <ValidationError message={nameError} />} */}
                                <label htmlFor='new-note-name'>
                                    Zipcode
                                </label>
                                <input type='text' name='new-note-name' id='new-note-name'
                                    onChange={e => this.updateName(e.target.value)}/>
                                {/* {this.state.name.touched && <ValidationError message={nameError} />} */}
                            </fieldset>
                            <fieldset className='signup_options'>
                                <div className='flex-row'>
                                    <label htmlFor='requestService'>
                                        Request Service
                                    </label>
                                    <input type='checkbox' name='requestService' id='requestService'
                                        onChange={e => this.updateName(e.target.value)}/>
                                </div>
                                <div className='flex-row'>
                                    <label htmlFor='joinMailing'>
                                        Subscribe to Mailing List
                                    </label>
                                    <input type='checkbox' name='joinMailing' id='joinMailing'
                                        onChange={e => this.updateName(e.target.value)}/>
                                </div>
                            </fieldset>
                        </div>
                        <button 
                            type='submit' 
                            className='submit_button'
                            disabled={
                                this.validateName() ||
                                this.validateContent() ||
                                this.validateFolder()
                            }
                        >
                            SUBMIT
                        </button>
                        {/* {<ValidationError message={fetchError} />} */}
                    </form>
            </section>
        )
    }
}

