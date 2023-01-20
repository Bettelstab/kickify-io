import BasicPage from "/components/basic-page";
import ArticleTeaser from "./ArticleTeaser";
import styles from "./Learn.module.css";

export default function Learn() {
  return (
    <BasicPage
      title="Learn about Shopify Apps"
      description="Some ArticleTeasers about Shopify App Development, hosting and related information"
      showAdvertising
    >
      <h1 className={styles.h1}>📚 Knowledge about Shopify Apps</h1>

      <div className={styles.articles}>
        <ArticleTeaser title="The Shopify Admin API" slug="shopify-admin-api">
          The Shopify Admin API is a set of powerful tools that you can use to
          customize, manage, and automate your store. With the API, you can
          write custom scripts to automate tasks, access and manage shop data,
          and even create custom integrations with third-party services.
        </ArticleTeaser>

        <ArticleTeaser
          title="Comparing hosting providers"
          slug="comparing-hosting-providers"
        >
          While Shopify itself provides a great hosting solution for stores, as
          an app developer you need to host your app yourself. Here are some
          options and considerations.
        </ArticleTeaser>

        <ArticleTeaser
          title="Earn money with Shopify"
          slug="earn-money-with-shopify"
        >
          In this article, we&apos;ll discuss some of the ways you can earn money
          with Shopify. From selling products and services to offering
          advertising space and creating apps, there are plenty of options to
          explore. Let&apos;s get started!
        </ArticleTeaser>
      </div>
    </BasicPage>
  );
}
