import { useSelector } from 'react-redux/es/hooks/useSelector';

const Users = () => {
  const { users } = useSelector((state) => state.users);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
