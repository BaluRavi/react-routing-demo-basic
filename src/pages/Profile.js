import { ChangeProfile } from './ChangeProfile'

export const Profile = (props) => {
  return (
    <div>
      <h1>Profile, user is {props.username} </h1>
      <ChangeProfile setUsername={props.setUsername}></ChangeProfile>
    </div>
  );
};
