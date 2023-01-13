import Link from "next/link";
import BasicPage from "/components/basic-page";
import Article from "./Article";

export default function Learn() {
  return (
    <BasicPage
      title="Learn about Shopify Apps"
      description="Some articles about Shopify App Development, hosting and related information"
      showAdvertising
    >
      <h1>Knowledge about Shopify Apps</h1>

      <Article title="The Shopify Admin API">
        The Shopify Admin API is a set of powerful tools that you can use to
        customize, manage, and automate your store. With the API, you can write
        custom scripts to automate tasks, access and manage shop data, and even
        create custom integrations with third-party services.

        <Link href="/learn/shopify-admin-api">Read more</Link>
      </Article>

      <Article title="Shopify App Hosting">
        While Shopify itself provides a great hosting solution for stores, as an app developer
        you need to host your app yourself. Here are some options and considerations.

        <Link href="/learn/shopify-app-hosting">Read more</Link>
      </Article>

      <Article title="Earn money with Shopify">
        While Shopify itself provides a great hosting solution for stores, as an app developer
        you need to host your app yourself. Here are some options and considerations.

        <Link href="/learn/earn-money-with-shopify">Read more</Link>
      </Article>
    </BasicPage>
  );
}
