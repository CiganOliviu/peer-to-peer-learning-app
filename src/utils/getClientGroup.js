export default function getClientGroup(data, userGroup, userInfo) {
    data.forEach((item) => {
        item?.client.forEach((clientItem) => {
            if (userInfo?.user?.email === clientItem.email)
                userGroup.current = (item.name)
        })
    })
}