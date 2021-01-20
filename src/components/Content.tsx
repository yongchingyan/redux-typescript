import React, { Component } from 'react';
import '../css/content.scss'
import data  from "../asset/assets.json"

interface AssetData {
    imagePath: string;
    format: string;
    link: string;
    content: Content
    image?: string;
}

interface Content {
    button?: string;
    overlay?: string;
    text?: string;
    prompt?:  string;
}

interface IProps {
}

interface IState {
  assetsStore?: AssetData[];
}

export class MainContent extends Component<IProps, IState> {
    
    constructor(props: IProps) {
        super(props)
        this.state = {
            assetsStore: []
        }
    }

    componentDidMount() {
        // this.setState({assetsStore: []})
        let assetsStore: any[] = []
        data.assets.forEach((asset, key) => {
            import(`../asset/${asset.imagePath}`)
            .then(image=>{
                assetsStore[key] = {...asset, image: image.default}
                this.setState({assetsStore})
            });
        });
    }

    render() {

        let content; 
        if (this.state.assetsStore) {
            content = this.state.assetsStore.map(asset => {

                let temp: JSX.Element[]  = []
                let content : Content = asset.content
                if (Object.keys(content).length > 0){
                    
                    if ("text" in content) {
                        temp.push(
                            <h3 key={`text-${asset.imagePath}`}>
                                {content["text"]}
                            </h3>
                        )
                    }
                    if ("button" in content) {
                        temp.push(
                            <button key={`button-${asset.imagePath}`}>
                                {content["button"]}
                            </button>
                        )
                    }
                    if ("prompt" in content){
                        // temp.push(<a className="prompt" href={asset.link}>{content["prompt"]}</a>)
                        temp.push(
                            <span className="prompt" key={`prompt-${asset.imagePath}`}>
                                {content["prompt"]}
                            </span>)
                    }
                    if ("overlay" in content){
                        temp.push(
                            <div className="overlay" key={`overlay-${asset.imagePath}`}></div>
                        )
                    }
                }
                
                return (
                    <div key={`div-${asset.imagePath}`} className={asset.format}>
                        <a key={`a-${asset.imagePath}`} className="clickable-div" href={asset.link} >
                            <React.Fragment >
                                {temp}  
                            </React.Fragment>
                            <img key={`img-${asset.imagePath}`} alt="Game Banner" src={asset.image}/> 
                        </a>
                    </div> 
                )
            })
        }

        const {assetsStore} = this.state
        return (
            <div id="content">
                {/* <img src={imageSrc} /> */}
                <div className="wrapper">
                    { assetsStore && assetsStore.length > 0 ? 
                        content
                     : null}
                </div>
            </div>
        )
    }
}