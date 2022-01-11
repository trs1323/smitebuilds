import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        super()
        this.state={
            items: {},
            currentMap: "",
            currentBuild: ''
        }}

    componentDidMount(){
        fetch("https://cms.smitegame.com/wp-json/smite-api/getItems/1?")
            .then(res => res.json())
            .then(
                (res) => {
                  this.setState({
                    items: res
                  });
                 
                }
                
            )
    }

     setBuild = (name) => {
       if(this.state.currentBuild === name){
           this.setState({currentBuild: ""})
       }else{
           this.setState({currentBuild: name})
       }
      }

    findItem = (name) =>{
        return Object.keys(this.state.items).map((obj, i) => {
            if(this.state.items[obj].DeviceName.toUpperCase() === name.toUpperCase()){
               
                return <>  <img src={this.state.items[obj].itemIcon_URL} /> <p>{this.state.items[obj].DeviceName}</p></>
               
            }
    }
        )}

    render() {
        return (
            <div className="app">
                <div className="home-btns">
  <h3 className={this.state.currentMap === "Joust" ? 'current' : ''}  onClick={()=> this.setState({currentMap: 'Joust'})}>Joust</h3>
  <h3 className={this.state.currentMap === "Conquest" ? 'current' : ''}  onClick={()=> this.setState({currentMap: 'Conquest'})}>Conquest</h3>
  <h3 className={this.state.currentMap === "Assualt" ? 'current' : ''}  onClick={()=> this.setState({currentMap: 'Assualt'})}>Assualt</h3>
</div>
<div id="Joust" className={this.state.currentMap === 'Joust' ? 'map': 'hide'}>
  
  <h3 onClick={()=>this.setBuild('Sol')}>Sol</h3>
    <div className={this.state.currentBuild === 'Sol' ? 'build': 'hide'}>
            <div className="item">{this.findItem("Manikin Scepter")}</div>
            <div className="item">{this.findItem("Ring of Hecate")}</div>
            <div className="item">{this.findItem("Typhon's Fang")}</div>
            <div className="item">{this.findItem("Telkhines Ring")}</div>
            <div className="item">{this.findItem("Demonic Grip")}</div>
            <div className="item">{this.findItem("Rod of Tahuti")}</div>
   

            <div className="item item-break"><p><b>RELICS: </b></p></div>
            <div className="item">{this.findItem("Purification Beads")}</div>
            <div className="item">{this.findItem("Aegis Amulet")}</div>
            <div className="item item-break"><p><b>STARTER UPGRADE: </b></p></div>
            <div className="item">{this.findItem("Manikin Mace")}</div>
    </div>
    <h3 onClick={()=>this.setBuild('Hunter')}>Hunter</h3>
    <div className={this.state.currentBuild === 'Hunter' ? 'build': 'hide'}>
            <div className="item">{this.findItem('LEATHER COWL')}</div>
            <div className="item">{this.findItem('the crusher')}</div>
            <div className="item">{this.findItem('asi')}</div>
            <div className="item">{this.findItem('wind demon')}</div>
            <div className="item">{this.findItem('The Executioner')}</div>
            <div className="item">{this.findItem('Deathbringer')}</div>
            <div className="item item-break"><p><b>RELICS: </b></p></div>
            <div className="item">{this.findItem('Purification Beads')}</div>
            <div className="item">{this.findItem('Aegis Amulet')}</div>
            <div className="item item-break"><p><b>STARTER UPGRADE: </b></p></div>
            <div className="item">{this.findItem("hunter's cowl")}</div>
    </div>
    <h3 onClick={()=>this.setBuild('Mage')}>Mage</h3>
    <div className={this.state.currentBuild === 'Mage' ? 'build': 'hide'}>
            <div className="item">{this.findItem("Conduit Gem")}</div>
            <div className="item">{this.findItem("Chronos' Pendant")}</div>

            <div className=" item-bracket"></div>
            <div className="item item-break"><p><b>If Healing: </b></p></div>
            <div className="item">{this.findItem("divine ruin")}</div>
            <div className="item item-break"><p><b>Else: </b></p></div>
            <div className="item">{this.findItem("soul gem")}</div>
            <div className=" item-bracket"></div>

            <div className="item">{this.findItem("Charon's Coin")}</div>
            <div className="item">{this.findItem("soul reaver")}</div>
            <div className="item">{this.findItem("Rod of Tahuti")}</div>
            <div className="item item-break"><p><b>RELICS: </b></p></div>
            <div className="item">{this.findItem("Purification Beads")}</div>
            <div className="item">{this.findItem("Aegis Amulet")}</div>
            <div className="item item-break"><p><b>STARTER UPGRADE: </b></p></div>
            <div className="item">{this.findItem("Gem of Focus")}</div>
    </div>
    <h3 onClick={()=>this.setBuild('Tank')}>Tank</h3>
    <div className={this.state.currentBuild === 'Tank' ? 'build': 'hide'}>
            <div className="item">{this.findItem("Sentinel's Gift")}</div>
            <div className="item">{this.findItem("Stone of Binding")}</div>
            <div className="item">{this.findItem("heartward Amulet")}</div>
            <div className="item">{this.findItem("Sovereignty")}</div>
            <div className="item">{this.findItem("Pridwen")}</div>

            <div className=" item-bracket"></div>
            <div className="item item-break"><p><b>If Healing: </b></p></div>
            <div className="item">{this.findItem("Pestilence")}</div>
            <div className="item item-break"><p><b>If Crit: </b></p></div>
            <div className="item">{this.findItem("Spectral Armor")}</div>
            <div className=" item-bracket"></div>

            <div className="item item-break"><p><b>RELICS: </b></p></div>
            <div className="item">{this.findItem("Meditation Cloak")}</div>
            <div className="item">{this.findItem("Magic Shell")}</div>
            <div className="item item-break"><p><b>STARTER UPGRADE: </b></p></div>
            <div className="item">{this.findItem("Sentinel's Boon")}</div>
    </div>
</div>

<div id="Conquest" className={this.state.currentMap === 'Conquest' ? 'map': 'hide'} >

<h3 onClick={()=>this.setBuild('Sol')}>Sol</h3>
    <div className={this.state.currentBuild === 'Sol' ? 'build': 'hide'}>
    <div className=" item-bracket"></div>
            <div className="item item-break"><p><b>If Mid: </b></p></div>
            <div className="item">{this.findItem("Manikin Scepter")}</div>
            <div className="item item-break"><p><b>If Carry: </b></p></div>
            <div className="item">{this.findItem("Gilded Arrow")}</div>
            <div className=" item-bracket"></div>

            <div className="item">{this.findItem("Ring of Hecate")}</div>
            <div className="item">{this.findItem("Typhon's Fang")}</div>
            <div className="item">{this.findItem("Telkhines Ring")}</div>
            <div className="item">{this.findItem("Demonic Grip")}</div>
            <div className="item">{this.findItem("Rod of Tahuti")}</div>
   

            <div className="item item-break"><p><b>RELICS: </b></p></div>
            <div className="item">{this.findItem("Purification Beads")}</div>
            <div className="item">{this.findItem("Aegis Amulet")}</div>
            <div className="item item-break"><p><b>STARTER UPGRADE: </b></p></div>
            <div className="item">{this.findItem("Manikin Mace")}</div>
            <div className="item">{this.findItem("Diamond Arrow")}</div>
    </div>
    
    <h3 onClick={()=>this.setBuild('Hunter')}>Hunter</h3>
    <div className={this.state.currentBuild === 'Hunter' ? 'build': 'hide'}>
            <div className="item">{this.findItem("death's toll")}</div>
            <div className="item">{this.findItem("the crusher")}</div>
            <div className="item">{this.findItem("asi")}</div>
            <div className="item">{this.findItem("wind demon")}</div>
            <div className="item">{this.findItem("The Executioner")}</div>
            <div className="item">{this.findItem("Deathbringer")}</div>
            <div className="item item-break"><p><b>RELICS: </b></p></div>
            <div className="item">{this.findItem("Purification Beads")}</div>
            <div className="item">{this.findItem("Aegis Amulet")}</div>
            <div className="item item-break"><p><b>STARTER UPGRADE: </b></p></div>
            <div className="item">{this.findItem("Death's Embrace")}</div>
    </div>
    <h3 onClick={()=>this.setBuild('Mage')}>Mage</h3>
    <div className={this.state.currentBuild === 'Mage' ? 'build': 'hide'}>
            <div className="item">{this.findItem("Conduit Gem")}</div>
            <div className="item">{this.findItem("Chronos' Pendant")}</div>

            <div className=" item-bracket"></div>
            <div className="item item-break"><p><b>If Healing: </b></p></div>
            <div className="item">{this.findItem("divine ruin")}</div>
            <div className="item item-break"><p><b>Else: </b></p></div>
            <div className="item">{this.findItem("soul gem")}</div>
            <div className=" item-bracket"></div>

            <div className="item">{this.findItem("Charon's Coin")}</div>
            <div className="item">{this.findItem("soul reaver")}</div>
            <div className="item">{this.findItem("Rod of Tahuti")}</div>
            <div className="item item-break"><p><b>RELICS: </b></p></div>
            <div className="item">{this.findItem("Purification Beads")}</div>
            <div className="item">{this.findItem("Aegis Amulet")}</div>
            <div className="item item-break"><p><b>STARTER UPGRADE: </b></p></div>
            <div className="item">{this.findItem("Gem of Focus")}</div>
    </div>
    <h3 onClick={()=>this.setBuild('Tank')}>Tank</h3>
    <div className={this.state.currentBuild === 'Tank' ? 'build': 'hide'}>
            <div className="item">{this.findItem("Sentinel's Gift")}</div>
            <div className="item">{this.findItem("Gauntlet of Thebes")}</div>
            <div className="item">{this.findItem("Sovereignty")}</div>
            <div className="item">{this.findItem("Pridwen")}</div>
            <div className="item">{this.findItem("Pestilence")}</div>
            <div className="item">{this.findItem("Spectral Armor")}</div>
            <div className="item item-break"><p><b>RELICS: </b></p></div>
            <div className="item">{this.findItem("Meditation Cloak")}</div>
            <div className="item">{this.findItem("Magic Shell")}</div>
            <div className="item item-break"><p><b>STARTER UPGRADE: </b></p></div>
            <div className="item">{this.findItem("Sentinel's Embrace")}</div>
    </div>
</div>

<div id="Assualt" className={this.state.currentMap === 'Assualt' ? 'map': 'hide'} >

    <h3 onClick={()=>this.setBuild('Hunter')}>Hunter</h3>
    <div className={this.state.currentBuild === 'Hunter' ? 'build': 'hide'}>
            <div className="item">{this.findItem("asi")}</div>
            <div className="item">{this.findItem("the crusher")}</div>
            <div className="item">{this.findItem("wind demon")}</div>
            <div className="item">{this.findItem("The Executioner")}</div>
            <div className="item">{this.findItem("deathbringer")}</div>
            <div className="item">{this.findItem("death's toll")}</div>
            <div className="item item-break"><p><b>RELICS: </b></p></div>
            <div className="item">{this.findItem("Meditation Cloak")}</div>
            <div className="item">{this.findItem("Purification Beads")}</div>
            <div className="item item-break"><p><b>STARTER UPGRADE: </b></p></div>
            <div className="item">{this.findItem("Death's Embrace")}</div>
    </div>
    <h3 onClick={()=>this.setBuild('Mage')}>Mage</h3>
    <div className={this.state.currentBuild === 'Mage' ? 'build': 'hide'}>
            <div className="item">{this.findItem("Chronos' Pendant")}</div>

            <div className=" item-bracket"></div>
            <div className="item item-break"><p><b>If Healing: </b></p></div>
            <div className="item">{this.findItem("divine ruin")}</div>
            <div className="item item-break"><p><b>Else: </b></p></div>
            <div className="item">{this.findItem("soul gem")}</div>
            <div className=" item-bracket"></div>

            <div className="item">{this.findItem("Charon's Coin")}</div>
            <div className="item">{this.findItem("Rod of Tahuti")}</div>
            <div className="item">{this.findItem("Conduit Gem")}</div>
            <div className="item item-break"><p><b>RELICS: </b></p></div>
            <div className="item">{this.findItem("Meditation Cloak")}</div>
            <div className="item">{this.findItem("Purification Beads")}</div>
            <div className="item item-break"><p><b>STARTER UPGRADE: </b></p></div>
            <div className="item">{this.findItem("Gem of Focus")}</div>
    </div>
    <h3 onClick={()=>this.setBuild('Tank')}>Tank</h3>
    <div className={this.state.currentBuild === 'Tank' ? 'build': 'hide'}>
            <div className="item">{this.findItem("Gauntlet of Thebes")}</div>
            <div className="item">{this.findItem("Sovereignty")}</div>
            <div className="item">{this.findItem("Pridwen")}</div>
            <div className="item">{this.findItem("Pestilence")}</div>
            <div className="item">{this.findItem("Spectral Armor")}</div>
            <div className="item">{this.findItem("Sentinel's Gift")}</div>
            <div className="item item-break"><p><b>RELICS: </b></p></div>
            <div className="item">{this.findItem("Meditation Cloak")}</div>
            <div className="item">{this.findItem("Magic Shell")}</div>
            <div className="item item-break"><p><b>STARTER UPGRADE: </b></p></div>
            <div className="item">{this.findItem("Sentinel's Boon")}</div>
    </div>

    <h3 onClick={()=>this.setBuild('Sol')}>Sol</h3>
    <div className={this.state.currentBuild === 'Sol' ? 'build': 'hide'}>
            
            <div className="item">{this.findItem("Ring of Hecate")}</div>
            <div className="item">{this.findItem("Typhon's Fang")}</div>
            <div className="item">{this.findItem("Telkhines Ring")}</div>
            <div className="item">{this.findItem("Demonic Grip")}</div>
            <div className="item">{this.findItem("Rod of Tahuti")}</div>
            <div className="item">{this.findItem("Manikin Scepter")}</div>

            <div className="item item-break"><p><b>RELICS: </b></p></div>
            <div className="item">{this.findItem("Meditation Cloak")}</div>
            <div className="item">{this.findItem("Purification Beads")}</div>
         
            <div className="item item-break"><p><b>STARTER UPGRADE: </b></p></div>
            <div className="item">{this.findItem("Manikin Mace")}</div>
    </div>
</div>
            </div>
        )
    }
}
