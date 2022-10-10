export const FriendList = ({friends}) => {
    return (
        <ul class="friend-list">
            {friends.map(friend => (
                <li class="item">
                    <span class="status">{(friend.isOnline)?"true":"false" }</span>
  <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
                    <p class="name">{ friend.name}</p>
</li>
            ))}
  
</ul>
    )
}