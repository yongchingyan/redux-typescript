import React, { Component } from 'react';
import '../css/content.scss'
import data  from "../asset/assets.json"

interface AssetData {
    imagePath: string;
    format: string;
    link: string;
    content: Content
}

interface Content {
    button?: string;
    overlay?: string;
    text?: string;
    prompt?:  string;
}

export class MainContent extends Component<{}, { assetsStore: AssetData[] }> {
    
    constructor() {
        super({})
        this.state = {
            assetsStore: []
        }
    }

    componentDidMount() {
        // this.setState({assetsStore: []})
        let assetsStore: any[] = []
        data.assets.map((asset, key) => {
            import(`../asset/${asset.imagePath}`)
            .then(image=>{
                assetsStore[key] = {...asset, imagePath: image.default}
                this.setState({assetsStore})
            });
        });
    }

    // const [imageSrc, setImage] = useState('');
    // import("../asset/logo.png").then(image=>setImage(image.default));
    
    render() {

        let content; 
        content = this.state.assetsStore.map(asset => {

            let temp: JSX.Element[]  = []
            let content : Content = asset.content
            if (Object.keys(content).length > 0){
                
                if ("text" in content) {
                    temp.push(<h3>{content["text"]}</h3>)
                }
                if ("button" in content) {
                    temp.push(<button>{content["button"]}</button>)
                }
                if ("prompt" in content){
                    temp.push(<a className="prompt" href={asset.link}>{content["prompt"]}</a>)
                }
                if ("overlay" in content){
                    temp.push(<div className="overlay"></div>)
                }
            }

            return (
                <div className={asset.format}>
                    <a className="clickable-div" href={asset.link}>
                        {temp}
                        <img src={asset.imagePath}/> 
                    </a>
                </div> 
            )
        })

        const {assetsStore} = this.state
        return (
            <div id="content">
                {/* <img src={imageSrc} /> */}
                <div className="wrapper">
                    { this.state.assetsStore.length > 0 ? 
                        content
                     : null}
                {/* <div className="small-sq"> </div>
                <div className="small-sq"> </div>
                <div className="small-sq"> </div>
                <div className="small-sq"> </div>
                <div className="rect"></div>
                <div className="small-sq"> </div>
                <div className="small-sq"> </div>
                <div className="small-sq"> </div>
                <div className="small-sq"> </div>
                <div className="rect"></div> */}
                </div>
            </div>
        )
    }
}