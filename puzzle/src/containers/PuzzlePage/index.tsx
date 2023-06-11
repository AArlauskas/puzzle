import { useState } from "react";
import Card from "../../components/Card";
import "./styles.css";
import classnames from "classnames";
import { Button, ButtonGroup, Col, Grid, Input, Row } from "rsuite";

const ANSWERS = [66, 255, 234, 78, 178];

const PuzzlePage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([0, 0, 0, 0, 0]);

  const renderPuzzle = () => {
    if (currentStep === 0) return renderStep0();
    if (currentStep === 1) return renderStep1();
    if (currentStep === 2) return renderStep2();
    if (currentStep === 3) return renderStep3();
    if (currentStep === 4) return renderStep4();
    if (currentStep === 5) return renderAnswerInput();
  };

  const renderStep0 = () => {
    // A command was given, a darkness was born,
    // A betrayal of trust, a galaxy torn,
    // The clones obeyed, their loyalty misplaced,
    // As the Jedi were hunted, their future erased.

    // The Order had come, the fate of the Jedi sealed,
    // Their power feared, their safety no longer revealed,
    // As the galaxy was thrown into chaos and strife,
    // The darkness had won, the end of an era in sight.

    // But hope still remained, a spark of light in the night,
    // A few Jedi survived, their destiny to fight,
    // Against the darkness, to restore peace and balance,
    // Their legacy lived on, a symbol of resistance.

    // And so we ask, with solemn voice and face,
    // What was the order's number, that caused such disgrace?
    return (
      <div className="puzzle-0">
        <Card>
          <p>
            A command was given, a darkness was born,
            <br /> A betrayal of trust, a galaxy torn,
            <br /> The clones obeyed, their loyalty misplaced,
            <br /> As the Jedi were hunted, their future erased.
          </p>
          <p>
            The Order had come, the fate of the Jedi sealed,
            <br /> Their power feared, their safety no longer revealed,
            <br /> As the galaxy was thrown into chaos and strife,
            <br /> The darkness had won, the end of an era in sight.
          </p>
          <p>
            But hope still remained, a spark of light in the night,
            <br /> A few Jedi survived, their destiny to fight,
            <br /> Against the darkness, to restore peace and balance,
            <br /> Their legacy lived on, a symbol of resistance.
          </p>
          <p>
            And so we ask, with solemn voice and face,
            <br /> What was the order's number, that caused such disgrace?
          </p>
        </Card>
      </div>
    );
  };

  const renderStep1 = () => {
    // In the world of bytes and bits,
    // A puzzle that we must admit,
    // Exists for us to solve with wit,
    // A number that we can transmit.

    // A byte of data, just eight bits,
    // A limit that we must admit,
    // But with some math and clever tricks,
    // A highest number we can depict.

    // Each bit can hold a value true,
    // A one or zero, it's up to you,
    // But when combined in a certain way,
    // A decimal number we can display.

    // From zero all the way to the top,
    // We count in binary, it's quite a crop,
    // Of numbers that we can compile,
    // But there's one that stands with style.

    // The highest number that we can show,
    // In just one byte, a limit we know,
    // But what is it, we'll leave you to know,
    // A puzzle for you to solve and grow.
    return (
      <div className="puzzle-1">
        <Card>
          <p>
            In the world of bytes and bits, <br />
            A puzzle that we must admit, <br />
            Exists for us to solve with wit, <br />A number that we can
            transmit.
          </p>

          <p>
            A byte of data, just eight bits, <br />
            A limit that we must admit, <br />
            But with some math and clever tricks, <br />A highest number we can
            depict.
          </p>
          <p>
            Each bit can hold a value true, <br />
            A one or zero, it's up to you, <br />
            But when combined in a certain way, <br />A decimal number we can
            display.
          </p>
          <p>
            From zero all the way to the top, <br />
            We count in binary, it's quite a crop, <br />
            Of numbers that we can compile, <br />
            But there's one that stands with style.
          </p>
          <p>
            The highest number that we can show, <br />
            In just one byte, a limit we know, <br />
            But what is it, we'll leave you to know, <br />A puzzle for you to
            solve and grow.
          </p>
        </Card>
      </div>
    );
  };

  const renderStep2 = () => {
    //         With potions and spells, it's quite a feat
    // To figure out a name so discreet
    // This wizard's past is shrouded in mist
    // But solving his name is hard to resist

    // His surname is that of a snake
    // So much he can make or break
    // But what of his first, you may ask
    // It's a tough one, a tricky task

    // For clues, you must look to his past
    // A tragic love that couldn't last
    // A boy who lost his Lily flower
    // Whose death he grieved for hours

    // Combine them both, and you shall see
    // The name of this Slytherin prodigy

    // A founding father of great renown
    // His story told through song and sound
    // A revolutionary, a man of his time
    // But can you guess his name in this rhyme?

    // Born out of wedlock, he had to fight
    // For his place in life, to make things right
    // A self-made man, a brilliant mind
    // With words and ideas, he was always kind

    // His life cut short, but his legacy lives on
    // His name forever etched in song
    // A tribute to the immigrant dream
    // The man behind the American scheme

    // Put it together, don't hesitate
    // The name of this hero, don't leave it to fate.

    // And after add their names together,
    // you'll get an emperor like no other.
    // Rule the Romans he did for a while,
    // until a death struck the man with no smile.
    // The year of the death is the thing that we are looking,
    // subtract a number 1 and you'll be good lookin.

    return (
      <div className="puzzle-2">
        <Card>
          <p>
            With potions and spells, it's quite a feat
            <br />
            To figure out a name so discreet
            <br />
            This wizard's past is shrouded in mist
            <br />
            But solving his name is hard to resist
          </p>
          <p>
            His surname is that of a snake
            <br />
            So much he can make or break
            <br />
            But what of his first, you may ask
            <br />
            It's a tough one, a tricky task
          </p>
          <p>
            For clues, you must look to his past
            <br /> A tragic love that couldn't last
            <br /> A boy who lost his Lily flower
            <br /> Whose death he grieved for hours
          </p>
          <p>
            Combine them both, and you shall see
            <br /> The name of this Slytherin prodigy
          </p>
          <p>
            A founding father of great renown
            <br /> His story told through song and sound
            <br /> A revolutionary, a man of his time
            <br /> But can you guess his name in this rhyme?
          </p>
          <p>
            Born out of wedlock, he had to fight
            <br /> For his place in life, to make things right
            <br /> A self-made man, a brilliant mind
            <br /> With words and ideas, he was always kind
          </p>
          <p>
            His life cut short, but his legacy lives on
            <br /> His name forever etched in song
            <br /> A tribute to the immigrant dream
            <br /> The man behind the American scheme
          </p>
          <p>
            Put it together, don't hesitate
            <br /> The name of this hero, don't leave it to fate.
          </p>
          <p>
            And after add their names together,
            <br /> you'll get an emperor like no other.
            <br /> Rule the Romans he did for a while,
            <br /> until a death struck the man with no smile.
            <br /> The year of the death is the thing that we are looking,
            <br /> subtract a number 1 and you'll be good lookin.
          </p>
        </Card>
      </div>
    );
  };

  const renderStep3 = () => {
    // In Scranton's realm, Halloween's delight,
    // Pam's costume choice creates quite a sight.
    // Jokers and "Dave," pranks take their place,
    // Love tested, transfers, in this Office space.

    // Holly's departure, emotions unfold,
    // Michael pleads, but doubts take hold.
    // Jim and Pam's lunch, a prank gone awry,
    // A moment of awkwardness, love won't deny.

    // Dwight's Cornell sweatshirt sparks a feud,
    // Andy's revenge, an interview skewed.
    // Beet farms and rivalry, humor prevails,
    // In Scranton's office, where comedy never fails.

    // Within this episode's laughter and cheer,
    // A number hides, drawing answers near.
    // Watch closely, for the key to retrieve,
    // Is the episode's number you need to believe.

    return (
      <div className="puzzle-3">
        <Card>
          <p>
            In Scranton's realm, Halloween's delight,
            <br /> Pam's costume choice creates quite a sight.
            <br /> Jokers and "Dave," pranks take their place,
            <br /> Love tested, transfers, in this Office space.
          </p>
          <p>
            Holly's departure, emotions unfold,
            <br /> Michael pleads, but doubts take hold.
            <br /> Jim and Pam's lunch, a prank gone awry,
            <br /> A moment of awkwardness, love won't deny.
          </p>
          <p>
            Dwight's Cornell sweatshirt sparks a feud,
            <br /> Andy's revenge, an interview skewed.
            <br /> Beet farms and rivalry, humor prevails,
            <br /> In Scranton's office, where comedy never fails.
          </p>
          <p>
            Within this episode's laughter and cheer,
            <br /> A number hides, drawing answers near.
            <br /> Watch closely, for the key to retrieve,
            <br /> Is the episode's number you need to believe.
          </p>
        </Card>
      </div>
    );
  };

  const renderStep4 = () => {
    // In the deep and ancient forest glade,
    // A creature stalks beneath the shade.
    // Its scales a fiery crimson red,
    // With wings outstretched, it moves ahead.

    // Its eyes like rubies, gleaming bright,
    // A creature feared by day and night.
    // No sound is heard, no footstep made,
    // As it slips through the dappled glade.

    // What creature is this, with fiery breath?
    // What lurks within this forest's depths?
    // A mystery, a puzzle to solve,
    // A creature fierce and yet so bold.

    // Its shape is long, its claws are sharp,
    // Its presence felt, like a venomous harp.
    // A dragon young, with scales of flame,
    // A creature feared, and yet so game.

    // Its wings spread wide, it takes to flight,
    // A creature born to rule the night.
    // A red young dragon, fierce and true,
    // A mystery solved, and yet anew.

    // This monster lies in DND
    // but can you tell me it's HP?
    // Just be aware, that there are many,
    // must look by age as its foretelling.

    return (
      <div className="puzzle-4">
        <Card>
          <p>
            In the deep and ancient forest glade,
            <br /> A creature stalks beneath the shade.
            <br /> Its scales a fiery crimson red,
            <br /> With wings outstretched, it moves ahead.
          </p>
          <p>
            Its eyes like rubies, gleaming bright,
            <br /> A creature feared by day and night.
            <br /> No sound is heard, no footstep made,
            <br /> As it slips through the dappled glade.
          </p>
          <p>
            What creature is this, with fiery breath?
            <br /> What lurks within this forest's depths?
            <br /> A mystery, a puzzle to solve,
            <br /> A creature fierce and yet so bold.
          </p>
          <p>
            Its shape is long, its claws are sharp,
            <br /> Its presence felt, like a venomous harp.
            <br /> A dragon young, with scales of flame,
            <br /> A creature feared, and yet so game.
          </p>
          <p>
            Its wings spread wide, it takes to flight,
            <br /> A creature born to rule the night.
            <br /> A red young dragon, fierce and true,
            <br /> A mystery solved, and yet anew.
          </p>
          <p>
            This monster lies in DND
            <br /> but can you tell me it's HP?
            <br /> Just be aware, that there are many,
            <br /> must look by age as its foretelling.
          </p>
        </Card>
      </div>
    );
  };

  const isCorrectAnswer = () => {
    return ANSWERS.every((answer, index) => answer === userAnswers[index]);
  };

  const renderAnswerInput = () => {
    return (
      <Grid fluid>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          {renderInputs()}
        </Row>
        {isCorrectAnswer() && (
          <Row
            style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
          >
            {renderFinalClue()}
          </Row>
        )}
      </Grid>
    );
  };

  const setInputtedAnswer = (index: number, value: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const renderInputs = () => {
    return ANSWERS.map((_, index) => {
      return (
        <Col key={index} xs={4}>
          <Input
            type="number"
            value={userAnswers[index]}
            onChange={(value) => setInputtedAnswer(index, Number(value))}
          />
        </Col>
      );
    });
  };

  const renderFinalClue = () => {
    //     the answer to the puzzle lies in the code,
    // divide eAch number, to decode.
    // in order of one, four, three,
    // and then one, two, see what you'll See.

    // the resulting numbers, now revealed,
    // in the programmer's table, must be sealed.
    // for eaCh number, find its match,
    // a letter, a symbol, or a catch.

    // the message that was hidden well,
    // is now revealed, for all to tell.
    // a puzzle solved, a mystery gone,
    // a challenge met, a vIctory won.

    // so take the code and break it down,
    // and see what message can be found.
    // for hIdden deep within this text,
    // lies the answer, to perplexed.

    return (
      <div className="puzzle-5">
        <Card>
          <p>
            the answer to the puzzle lies in the code,
            <br /> divide eAch number, to decode.
            <br /> in order of one, four, three,
            <br /> and then one, two, see what you'll See.
          </p>
          <p>
            the resulting numbers, now revealed,
            <br /> in the programmer's table, must be sealed.
            <br /> for eaCh number, find its match,
            <br /> a letter, a symbol, or a catch.
          </p>
          <p>
            the message that was hidden well,
            <br /> is now revealed, for all to tell.
            <br /> a puzzle solved, a mystery gone,
            <br /> a challenge met, a vIctory won.
          </p>
          <p>
            so take the code and break it down,
            <br /> and see what message can be found.
            <br /> for hIdden deep within this text,
            <br /> lies the answer, to perplexed.
          </p>
        </Card>
      </div>
    );
  };

  return (
    <div
      className={classnames("puzzles-page", {
        "puzzle-step-0": currentStep === 0,
        "puzzle-step-1": currentStep === 1,
        "puzzle-step-2": currentStep === 2,
        "puzzle-step-3": currentStep === 3,
        "puzzle-step-4": currentStep === 4,
        "puzzle-step-5": currentStep === 5,
      })}
    >
      {renderPuzzle()}

      <ButtonGroup>
        <Button
          onClick={() => setCurrentStep(currentStep - 1)}
          disabled={currentStep === 0}
        >
          Previous
        </Button>
        <Button
          onClick={() => setCurrentStep(currentStep + 1)}
          disabled={currentStep === 5}
        >
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default PuzzlePage;
