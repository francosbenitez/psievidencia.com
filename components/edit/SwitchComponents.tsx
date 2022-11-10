export default function SwitchComponents({
  active,
  children,
}: {
  active: any;
  children: any;
}) {
  return children.filter((child: any) => child.props.name == active);
}
