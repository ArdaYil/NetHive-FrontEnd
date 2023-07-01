import UserIcon from "../components/UserIcon";
import { getUser } from "../hooks/useAuth";

const Account = () => {
  const user = getUser();

  if (!user) return null;
  console.log(user);
  return (
    <section className="account">
      <header className="account__header">
        <UserIcon className="account__header__left" size={150} />
        <article className="account__header__right">
          <p>{user.fullName}</p>
        </article>
      </header>
    </section>
  );
};

export default Account;
