import React from 'react'

function RenderClientData({ userInfo }) {
    return (
        <div>
            <p>{ userInfo?.user?.first_name } { userInfo?.user?.last_name }</p>
            <p>{ userInfo?.user?.email }</p>
        </div>
    )
}

export default RenderClientData;