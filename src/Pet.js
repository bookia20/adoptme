import React from "react";
export const Pet = ({ name, animal, breed }) => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, name),
  //   React.createElement("h1", {}, animal),
  //   React.createElement("h1", {}, breed)
  // ]);
  return (
    <div>
      <h1>{name.toUpperCase()}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
};

/*class HelloMessage extends React.Component {
        render() {
            return (
            <div>
                Hello {this.props.name}
            </div>
            );
        }
       }

        ReactDOM.render(
        <HelloMessage name="Taylor" />,
        document.getElementById('root')
);*/
