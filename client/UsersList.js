import React from 'react';

import style from './UsersList.css';

const UsersList = props => (
  	<div className={style.Users}>
		<div className={style.UsersOnline}>
	  		{props.users.length} people online
		</div>
		<ul className={style.UsersList}>
	  		{
				props.users.map((user) => {
		  			return (
						<li key={user.id} className={style.UserItem}>
			  				{user.name}
						</li>
		  			);
				})
	  		}
		</ul>
  	</div>
);

export default UsersList;