import Article from "../Article";
import BasicPage from "/components/basic-page";

export default function ShopifyAdminApi() {
  return (
    <BasicPage
      title="Shopify Admin API"
      description="What can you do with Shopify Admin API?"
      showAdvertising
    >
      <Article>
        <h1>The Shopify Admin API</h1>
        <p>
          Are you a Shopify developer looking for ways to get more out of your
          store? The Shopify Admin API is here to help. This powerful API allows
          you to access and manage shop data from your store, giving you greater
          control over your store’s operations. The Shopify Admin API is a set
          of powerful tools that you can use to customize, manage, and automate
          your store. With the API, you can write custom scripts to automate
          tasks, access and manage shop data, and even create custom
          integrations with third-party services.
        </p>

        <p>
          For example, with the Shopify Admin API, you can create scripts to
          automate routine tasks such as product updates, inventory management,
          and order fulfillment. You can also access customer data and modify
          customer profiles. Additionally, you can use the API to create custom
          integrations with services such as Mailchimp and QuickBooks.
        </p>

        <p>
          Developers can use the API to create robust and secure applications
          that leverage the power of Shopify. The API also provides
          comprehensive{" "}
          <a href="https://shopify.dev/api/admin">documentation</a>
          to help developers troubleshoot any issues they may encounter.
        </p>

        <p>
          Overall, the Shopify Admin API is an incredibly powerful tool for
          developers looking to get the most out of their store, and
          indispensable for Shopify app developers. Here at Kickify, we use it
          extensively to provide our services, for example for our reconcilation
          service. To make sure our clients don't miss any webhook event, we use
          the Shopify Admin API to regularly fetch all new data and compare it
          to our database.
        </p>

        <h2> Useful resources</h2>
        <ul>
          <li>
            <a href="https://shopify.dev/api/admin">
              Official Shopify Admin API docs
            </a>
          </li>
        </ul>
      </Article>
    </BasicPage>
  );
}
