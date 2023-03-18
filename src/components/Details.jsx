import React, { useEffect } from "react";





function Details(props) {

    const { modalDatas } = props
    function verif() {
        console.log(modalDatas)
    }
    verif()
    useEffect(() => {

    }, [modalDatas])

    return (
        <div>
            <div className="modal fade bd-example-modal-md" role="dialog" aria-labelledby="myLargeModalLabel">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <div id="modal-container">
                            <div data-dismiss="modal"  id="modal-box" className="modal-fade modal-md">
                                <div id="title"><h3>{modalDatas.name} #{modalDatas.id}</h3></div>
                                <div id="boxDetails">

                                    <div className={modalDatas.types[0].type.name} id="image">
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${modalDatas.id}.svg`} alt="" />
                                    </div>
                                    <div id="info">
                                        <div id="hp">
                                            HP:<div id="hpValue">{modalDatas.stats[0].base_stat}</div>
                                        </div>
                                        <div id="atk">
                                            Atack:<div id="atkValue">{modalDatas.stats[1].base_stat}</div>
                                        </div>
                                        <div id="df">
                                            Defense:<div id="dfValue">{modalDatas.stats[2].base_stat}</div>
                                        </div>
                                        <div id="spAtk">
                                            SpAtk:<div id="spAtkValue">{modalDatas.stats[3].base_stat}</div>
                                        </div>
                                        <div id="spDf">
                                            SpDef:<div id="spDfValue">{modalDatas.stats[4].base_stat}</div>
                                        </div>
                                        <div id="spd">
                                            Speed:<div id="spdValue">{modalDatas.stats[5].base_stat}</div>
                                        </div>

                                    </div>

                                </div>
                                <div id="typesHabilit">
                                    <div className={modalDatas.types[0].type.name} id="type">
                                        <h3>{modalDatas.types[0].type.name}</h3>
                                    </div>
                                    <div id="Habilites">
                                        <h5>Skills</h5>
                                        {modalDatas.abilities.map((habilit, index) => {
                                            return <div key={index} id="H1">{habilit.ability.name}</div>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}


export default Details