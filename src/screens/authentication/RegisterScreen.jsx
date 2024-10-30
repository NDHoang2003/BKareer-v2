import image from "../../assets/images/login.png";
import RegisterForm from "../../components/RegisterForm";

function Register() {
  return (
    <div className="flex-row">
      <RegisterForm />
      <div className="appName-block flex-col flex-items-center flex-content-center">
        <img src={image} className="img-authen"/>
        <div className="appName-authen">BKareer</div>
        <div className="app-slogan-txt">Ignite your future</div>
      </div>
    </div>
  );
}

export default Register;
