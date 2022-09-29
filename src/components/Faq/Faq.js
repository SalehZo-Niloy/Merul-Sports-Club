import React from 'react';
import './Faq.css'

const Faq = () => {
    return (
        <div className='faq'>
            <h3>Some FAQs</h3>
            <ul>
                <li>
                    <h4>How does React work?</h4>
                    <p>React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.</p>
                </li>
                <li>
                    <h4>Difference between Props and State</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>PROPS</th>
                                <th>STATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>The Data is passed from one component to another.</td>
                                <td>The Data is passed within the component only.</td>
                            </tr>
                            <tr>
                                <td>It is Immutable.</td>
                                <td>It is Mutable.</td>
                            </tr>
                            <tr>
                                <td>Props are read-only.</td>
                                <td>State is both read and write.</td>
                            </tr>
                        </tbody>
                    </table>
                </li>
                <li>
                    <h4>useEffect use cases excluding API fetch</h4>
                    <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: <br />directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
                </li>
            </ul>
        </div>
    );
};

export default Faq;