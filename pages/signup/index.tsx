import BasicPage from "/components/basic-page";

export default function Signup() {
  return (
    <BasicPage description="Signup" title="Signup">
      <div>
        <h1>Signup</h1>
        <div>
          Thank you so much for your interest in Kickify! We are currently in a
          closed alpha testing. If you leave us your email address, we will
          notify you as soon as we start public beta testing!
        </div>
        <form action="" method="post">
          <input type="email" name="email" placeholder="Email" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </BasicPage>
  );
}
