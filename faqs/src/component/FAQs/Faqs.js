import React, { useState } from "react";
import "./Faqs.css";
import { AiOutlinePlus } from "react-icons/ai";
import { FiX } from "react-icons/fi";
const Faqs = () => {
  const [showResults, setShowResults] = useState(false);
  const [show, setShow] = useState(true);
  const [showResults2, setShowResults2] = useState(false);
  const [show2, setShow2] = useState(true);
  const [showResults3, setShowResults3] = useState(false);
  const [show3, setShow3] = useState(true);
  const [showResults4, setShowResults4] = useState(false);
  const [show4, setShow4] = useState(true);
  const [showResults5, setShowResults5] = useState(false);
  const [show5, setShow5] = useState(true);
  const [showResults6, setShowResults6] = useState(false);
  const [show6, setShow6] = useState(true);
  const [showResults7, setShowResults7] = useState(false);
  const [show7, setShow7] = useState(true);

  return (
    <div className="faqspage">
      <h1 className="frequently">Frequently Asked Questions</h1>
      <h6 className="feelFree">
        Feel free to send us your questions or comments below
      </h6>
      {/* Q1 and answer1 */}
      <div className="div1">
        <hr className="line" />
        <h2 className="Q1">Lorem Ipsum?</h2>
        {show ? (
          <AiOutlinePlus
            className="show"
            onClick={() => {
              setShowResults(true);
              setShow(!show);
            }}
          />
        ) : (
          <FiX
            className="hide"
            onClick={() => {
              setShowResults(false);
              setShow(!show);
            }}
          />
        )}

        {showResults ? (
          <div className="answer1">
            <hr className="line" />
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature
            </p>
            <hr className="line3" />
          </div>
        ) : null}
      </div>
      {/* Q2 and answer2 */}
      <div className="div2">
        <hr className="line" />
        <h2 className="Q2">Tempus magna risus interdum ultricies sed urna?</h2>
        {show2 ? (
          <AiOutlinePlus
            className="show2"
            onClick={() => {
              setShowResults2(true);
              setShow2(!show2);
            }}
          />
        ) : (
          <FiX
            className="hide2"
            onClick={() => {
              setShowResults2(false);
              setShow2(!show2);
            }}
          />
        )}

        {showResults2 ? (
          <div className="answer2">
            <hr className="line" />
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature
            </p>
            <hr className="line3" />
          </div>
        ) : null}
      </div>
      {/* Q3 and answer3 */}
      <div className="div3">
        <hr className="line" />
        <h2 className="Q3">Augue in nibh urna volutpat mattis?</h2>
        {show3 ? (
          <AiOutlinePlus
            className="show3"
            onClick={() => {
              setShowResults3(true);
              setShow3(!show3);
            }}
          />
        ) : (
          <FiX
            className="hide3"
            onClick={() => {
              setShowResults3(false);
              setShow3(!show3);
            }}
          />
        )}
        {showResults3 ? (
          <div className="answer3">
            <hr className="line" />
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature
            </p>
            <hr className="line3" />
          </div>
        ) : null}{" "}
      </div>
      {/* Q4 and answer4 */}
      <div className="div4">
        {" "}
        <hr className="line" />
        <h2 className="Q4">Eu egestas sed sed posuere ultrices ?</h2>
        {show4 ? (
          <AiOutlinePlus
            className="show4"
            onClick={() => {
              setShowResults4(true);
              setShow4(!show4);
            }}
          />
        ) : (
          <FiX
            className="hide4"
            onClick={() => {
              setShowResults4(false);
              setShow4(!show4);
            }}
          />
        )}
        {showResults4 ? (
          <div className="answer4">
            <hr className="line" />
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature
            </p>
            <hr className="line3" />
          </div>
        ) : null}{" "}
      </div>
      {/* Q5 and answer5 */}
      <div className="div5">
        {" "}
        <hr className="line" />
        <h2 className="Q5">
          Elementum facilisi aliquam, nisi, orci vulputate?
        </h2>
        {show5 ? (
          <AiOutlinePlus
            className="show5"
            onClick={() => {
              setShowResults5(true);
              setShow5(!show5);
            }}
          />
        ) : (
          <FiX
            className="hide5"
            onClick={() => {
              setShowResults5(false);
              setShow5(!show5);
            }}
          />
        )}
        {showResults5 ? (
          <div className="answer5">
            <hr className="line" />
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature
            </p>
            <hr className="line3" />
          </div>
        ) : null}{" "}
      </div>
      {/* Q6 and answer6 */}
      <div className="div6">
        {" "}
        <hr className="line" />
        <h2 className="Q6">Nibh at odio dolor etim neque in vel id orci?</h2>
        {show6 ? (
          <AiOutlinePlus
            className="show6"
            onClick={() => {
              setShowResults6(true);
              setShow6(!show6);
            }}
          />
        ) : (
          <FiX
            className="hide6"
            onClick={() => {
              setShowResults6(false);
              setShow6(!show6);
            }}
          />
        )}
        {showResults6 ? (
          <div className="answer6">
            <hr className="line" />
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature
            </p>
            <hr className="line3" />
          </div>
        ) : null}{" "}
      </div>
      {/* Q7 and answer7 */}
      <div className="div7">
        {" "}
        <hr className="line" />
        <h2 className="Q7">Non dolor at velit lorem erat maecenas?</h2>
        {show7 ? (
          <AiOutlinePlus
            className="show7"
            onClick={() => {
              setShowResults7(true);
              setShow7(!show7);
            }}
          />
        ) : (
          <FiX
            className="hide7"
            onClick={() => {
              setShowResults7(false);
              setShow7(!show7);
            }}
          />
        )}
        {showResults7 ? (
          <div className="answer7">
            <hr className="line" />
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature
            </p>
            <hr className="line3" />
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Faqs;
