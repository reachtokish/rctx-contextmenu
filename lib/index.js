import React from 'react';

class RCTXContextmenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            menuVisible: false
        }

    }

    componentDidMount() {
        const contextElem = document.getElementById("context");
        let contextMenu;

        // open context menu
        if (document.addEventListener) {
            contextElem.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                this.setState({
                    menuVisible: true
                }, () => {
                    contextMenu = document.getElementById("context_menu");
                })
            }, false);
        }
        else {
            contextElem.attachEvent('oncontextmenu', () => {
                window.event.returnValue = false;
                this.setState({
                    menuVisible: true
                }, () => {
                    contextMenu = document.getElementById("context_menu");
                })
            });
        }

        // detect click outside
        document.addEventListener("click", (evt) => {
            var targetElement = evt.target;
            do {
                if (targetElement === contextMenu) {
                    return;
                }
                targetElement = targetElement.parentNode;
            } while (targetElement);
            this.setState({
                menuVisible: false
            })
        });
    }

    render() {
        const { menuVisible } = this.state;
        const { children } = this.props;
        return (
            <div className="my_app" id="context">
                {children}
                {menuVisible && <div id="context_menu">Context Menu</div>}
            </div>
        )
    }
}

export default RCTXContextmenu;