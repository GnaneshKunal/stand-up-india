import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import * as actions from '../actions';

import Dropzone from 'react-dropzone';

interface IUploadFormState {
    accept: string,
    files: Array<any>,
    dropzoneActive: boolean,
    types: number,
    formData: any
}

interface IUploadFormProps {
    uploadPics: any
}

class UploadForm extends React.Component<IUploadFormProps, IUploadFormState> {

    constructor(props: any) {
        super(props);

        this.state = {
            accept: '',
            files: [],
            dropzoneActive: false,
            types: 0,
            formData: new FormData()
        }
    }

    public onDragEnter() {
        console.log("on Drag");
        this.setState({
            dropzoneActive: true
        });
    }

    public onDragLeave() {
        console.log("onDragLeave");
        this.setState({
            dropzoneActive: false
        });
    }

    public async onDrop(files: any) {
        console.log(files);
        await this.setState({
            files,
            dropzoneActive: false
        });
        this.props.uploadPics(files);
    }

    public applyTypes(event: any) {
        console.log("apply types", event)
        this.setState({
            accept: event.target.value
        });
    }

    public async onSubmit(event: any) {
        event.preventDefault();
        const df = document.forms[0];
        console.log(df);
        console.log(df[1].files[0]);
        /* this.setState({ formData: this.state.formData.append("files", df[1].files) }); */
        await this.props.uploadPics(df);
        /* this.props.uploadPics(df[1].files, df[0].value); */
        /* console.log(document.forms[0][1].files);
	 * console.log(document.forms[0][0].value); */
    }

    public render(): JSX.Element {
        const { accept, files, dropzoneActive } = this.state;
        const overlayStyle = {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            padding: '2.5em 0',
            background: 'rgba(0,0,0,0.5)',
            textAlign: 'center',
            color: '#fff'
        };

        return (
            <section id="upload">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Upload Form</h2>
                            <h3 className="section-subheading text-muted">Upload Your Pictures Here</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <form encType="multipart/form-data" name="upload-form" onSubmit={this.onSubmit.bind(this)}>
                                <div className="form-group">
                                <label htmlFor="exampleFormControlSelect2"></label>
                                <select className="form-control" id="exampleFormControlSelect2" onChange={event => {
                                this.setState({
                                types: Number(event.target.value)
                                });
                                }}>
                                <option value={0}>Meetings Pics</option>
                                <option value={1}>Success Pics</option>
                                </select>
                                </div>
                                <div className="form-group">
                                <label htmlFor="pics">Photo Upload</label>
                                <input type="file" name="pics" id="pics" multiple className="form-control-file" />
                                </div>
                                <button type="submit" className="btn btn-primary">Upload</button>
				</form> */}
                            <label htmlFor="type"></label>
                            <select
                                onChange={event => {
                                    this.setState({
                                        types: Number(event.target.value)
                                    });
                                    console.log(this.state);
                                }}
                                id="type" name="types" className="form-control form-control-lg">
                                <option value={0}>SuccessStories</option>
                                <option value={1}>Meetings Pictures</option>
                            </select>
                            <Dropzone
                                multiple={true}
                                style={{ position: 'relative' }}
                                accept={accept}
                                onDrop={this.onDrop.bind(this)}
                                onDragEnter={this.onDragEnter.bind(this)}
                                onDragLeave={this.onDragLeave.bind(this)}
                            >
                                <div>
                                    <h2>Dropped files</h2>
                                    <ul >
                                        {
                                            files.map(f => <li>{f.name} - {f.size} bytes</li>)
                                        }
                                    </ul>
                                </div>
                            </Dropzone>
                        </div>
                    </div>
                </div >
            </section >
        );
    }

}

const mapStateToProps = (state: any) => state;

export function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        uploadPics: (formData: any) => dispatch<any>(actions.uploadPics(formData))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);

