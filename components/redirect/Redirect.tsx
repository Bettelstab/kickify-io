import useRedirect from '/library/hooks/useRedirect';

type Props = {
  newUrl: string;
};

export default function Redirect({ newUrl }: Props) {
  useRedirect(newUrl);

  return <></>;
}
