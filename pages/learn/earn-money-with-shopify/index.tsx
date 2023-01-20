import Link from "next/link";
import Article from "../Article";
import BasicPage from "/components/basic-page";

export default function EarnMoneyWithShopify() {
  return (
    <BasicPage
      title="How to earn money with Shopify"
      description="Ways to start a business based on Shopify"
      showAdvertising
    >
      <Article>
        <h1>How can you make money with Shopify?</h1>
        <ul>
          <li>
            Selling Products: You can make money with Shopify by selling
            products directly to customers from your online store. You can
            create your own product line and list it on your store or look for
            dropshipping suppliers who will ship products to your customers.
          </li>
          <li>
            Offering Services: You can also offer services such as web design,
            digital marketing, or copywriting on your Shopify store.
          </li>
          <li>
            Affiliate Marketing: You can earn money by promoting other people’s
            products and services on your store. You’ll receive a commission
            when customers purchase the products or services you’re promoting.
          </li>
          <li>
            Selling on Social Media: You can leverage Shopify’s integration with
            social media platforms such as Facebook and Instagram to promote and
            sell products directly to customers.
          </li>
          <li>
            Selling Advertising Space: You can also offer advertising space on
            your store to businesses that are related to your product niche.
            This is a great way to monetize your store without having to sell
            products.
          </li>
          <li>
            Sell your own app: You can create and sell your own app directly on
            the Shopify App Store. You can charge a one-time fee or a recurring
            subscription to access your app.{" "}
            <Link href="/learn/earn-money-with-shopify-apps">More on this</Link>
          </li>
        </ul>
      </Article>
    </BasicPage>
  );
}
