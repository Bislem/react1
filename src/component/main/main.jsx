import React, { Component } from 'react';
import Aside from '../aside/aside';
import './main.css';
class Main extends Component {
    state = { 
        style: {padding: 20,marginTop: 15,overflow: 'hidden'}
     }
    render() { 
        return ( 
            <div style={this.state.style}>
                <Aside />
                <main className="container">
                    <h1>This is h1</h1>
                    <h2>This is h2</h2>
                    <h3>This is h3</h3>
                    <h4>This is h4</h4>
                    <h5>This is h5</h5>
                    <h6>This is h6</h6>
                    <hr/>
                    <p>
                        <button className="btn">This is a button</button>
                        <button className="btn primary">This is a button</button>
                        <button className="btn secondary">This is a button</button>
                        <button className="btn danger">This is a button</button>
                        <button className="btn success">This is a button</button>
                        <button className="btn dark">This is a button</button>
                    </p>
                    <h1>This page is fully made with React.Js</h1>
                    <h2>Bootstrap is included!</h2>
                    <h5>actually i was working with out knowing that i included Bootstrap, then when i finished i realized that buttons have the focused effect that owns bootstrap hahahaha funny ! actually you will find it funny only if you were a programer !</h5>
                    <h3>Random Text</h3>
                    <span className="text-danger">this is font is great and i like it</span>
                    <p>On cried his is flown the faster. The nameless melancholy deep on the i and. My of and rare mefilled what upstarting and. And if days and from truly. The curious be the blessed fact liftednevermore chamber sorrowsorrow, fast soul was enchanted memories i his angels floor one, i books mien bust take visiter beating, countenance lining is that beguiling at i dreams wished bust. God and shadows open and the sad and and, my lenore surely leave that that of the, throws she whom burden of sitting beguiling head, napping sainted chamber thy flung linking raven. Muttered an cried wrought stately it the this out not. I longer form i of nevernevermore darkness my. With ebony i is quaint such i, the there divining or an divining if, syllable was chamber is a gave the. Wandering chamber stopped the followed. This unto peering on more evilprophet and a, i and till a some here before. With sad there rapping with sure i till a store. Yore once bird the on it in. Felt mefilled a no sad nights have and kind, that guessing mefilled scarce floor above sad. Angels shaven i sinking i the, surcease the scarcely was louder flutter implore by heard hesitating, raven outpour from sad and tempter said and some. Entrance sent from living if what not bore. Turning and core this living such, by a its desert i, ominous i thereat on midnight a tempest morrow nothing, the i so felt the uncertain. I now form that back the lenore still, these little eyes and of ah, a some blessed tell burden, grew grim on this myself. Plutonian thrilled ever i more theeby soul, sitting before mystery napping this i radiant within that, undaunted ashore something art i swung no or window my, here had.</p>

                </main>

            </div>
         );
    }
}
 
export default Main;