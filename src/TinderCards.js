import React, { useState } from 'react'
import TinderCard from "react-tinder-card"
import './TinderCards.css'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1000&h=500&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F38%2F2017%2F05%2F12232824%2Fshutterstock_498576862.jpg'
        },
        {
            name: 'Jeff Bezoz',
            url: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F38%2F2019%2F12%2FAmerican-Girl-Doll-Jess-3-2000.jpg'
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">

                {
                    people.map((person) =>
                    (
                        <TinderCard
                            className='swipe'
                            key={person.name}
                            preventSwipe={["up", "down"]}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            <div
                                style={{ backgroundImage: `url(${person.url})` }}
                                className='card'
                            >
                                <h3>
                                    {person.name}
                                </h3>

                            </div>

                        </TinderCard>
                    ))}
            </div>
        </div>
    )
}

export default TinderCards
