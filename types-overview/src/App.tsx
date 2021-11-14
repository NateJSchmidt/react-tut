import React, { ReactElement, ReactNode } from 'react';
import './App.css';

// Older React.FC example
// const HeadingFC: React.FC<{ title: string }> = ({ title }) => <h1>{title}</h1>;

// Conventional props
function Heading({ title }: { title: string }) {
  return <h1>{title}</h1>;
}
function HeadingWithContent({ children }: { children: ReactNode }): ReactElement {
  return <h1>{children}</h1>;
}

// defaultProps
const defaultContainerProps = {
  heading: <strong>My Heading</strong>,
};
type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;
function Container({ heading, children }: ContainerProps): ReactElement {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  );
}
Container.defaultProps = defaultContainerProps;

// Function props
function TextWithNumber({
  header,
  children
}: {
  header?: (num: number) => ReactNode;
  children: (num: number) => ReactNode;
}) {
  const [state, stateSet] = React.useState<number>(1);
  return (
    <div>
      {header && <h2>{header(state)}</h2>}
      <div>
        {children(state)}
      </div>
      <div>
        <button onClick={() => stateSet(state + 1)}>Add</button>
      </div>
    </div>
  )
}

// List
function List<ListItem>({
  items,
  renderItem
}: {
  items: ListItem[],
  renderItem: (item: ListItem) => ReactNode
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Class component
class MyHeading extends React.Component<{
  title: ReactNode
}> {
  render() {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}


function App() {
  return (
    <div>
      <Heading title="Hello World" />
      <HeadingWithContent>
        <strong>Hi</strong>
      </HeadingWithContent>
      <Container>
        Foo
      </Container>
      <Container heading={<strong>Bar</strong>}>
        Bar kids
      </Container>
      <TextWithNumber>
        {(num: number) => <div>Today's number number is {num}</div>}
      </TextWithNumber>
      <TextWithNumber header={(num: number) => <span>Header {num}</span>}>
        {(num: number) => <div>Today's number number is {num}</div>}
      </TextWithNumber>
      <List items={["Jack", "Sadie", "oso"]} renderItem={(item: string) => <div>{item.toLowerCase()}</div>} />
      <MyHeading title="My Heading" />
    </div>
  );
}

export default App;
