import React from 'react'


function RenderClientGroup({ userInfo, clientGroup, className }) {

    return (
        clientGroup.map((data) => {
            return (
                data?.client.map((clientData) => {
                    return (
                        <div>
                            <p><b>{userInfo?.user?.email === clientData?.email ? className + data?.name : ""}</b></p>
                        </div>
                    )
                })
            )
        })
    )
}

export default RenderClientGroup;