import React from "react";
import './TestsList.css';

function TestsList() {
    return <div className="content">
        <div className="heading">
            <h1>Online Tests</h1>
        </div>
        <div className="introText">
            <p>Here are some useful online psychological screening tests. Most are short and all are immediately scored. These online psychological tests are for your entertainment and possibly educational use only and do not replace in any way a formal psychiatric evaluation. Remember, for a diagnosis, you need to contact a licensed mental health professional.</p>
        </div>
        <div className="linkListContainer">
            <div className="linkList">
                <ul>
                    <li className="outerLi"> Abusive Tests:
                        <ul>
                            <li className="innerLi"><a href="https://www.healthyplace.com/psychological-tests/woman-abuse-screening-tool">Abuse Test: Woman Abuse Screening Tool</a></li>
                            <li className="innerLi"><a href="https://www.healthyplace.com/psychological-tests/domestic-violence-screening-test">Domestic Violence Screening Test</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="linkList">
                <ul>
                    <li className="outerLi"> Bipolar Disorder Tests:
                        <ul>
                            <li className="innerLi"><a href="https://www.healthyplace.com/psychological-tests/mood-disorder-questionnaire-mdq">Mood Disorder Questionnaire</a></li>
                            <li className="innerLi"><a href="https://www.healthyplace.com/psychological-tests/bipolar-mania-test">Bipolar Mania</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="linkList">
                <ul>
                    <li className="outerLi"> Anxiety
                        <ul>
                            <li className="innerLi"><a href="https://www.healthyplace.com/psychological-tests/panic-attack-test">Panic Attack</a></li>
                            <li className="innerLi"><a href="https://www.healthyplace.com/anxiety-panic/anxiety-disorders/anxiety-disorder-test-do-i-have-an-anxiety-disorder">Anxiety Disorder</a></li>
                            <li className="innerLi"><a href="https://www.healthyplace.com/anxiety-panic/social-anxiety-disorder/social-anxiety-disorder-test-do-i-have-social-anxiety">Social Anxiety Disorder</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="linkList">
                <ul>
                    <li className="outerLi"> Depression
                        <ul>
                            <li className="innerLi"><a href="https://www.healthyplace.com/depression/depression-information/depression-test-for-teenagers">Depression Test for Teenagers</a></li>
                            <li className="innerLi"><a href="https://www.healthyplace.com/psychological-tests/cognitive-symptoms-deficits-of-depression-test">Cognitive Symptoms of Depression</a></li>
                            <li className="innerLi"><a href="https://www.healthyplace.com/psychological-tests/quick-inventory-of-depressive-symptomatology">Depression Quiz</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="linkList">
                <ul>
                    <li className="outerLi">Addiction Tests:
                        <ul>
                            <li className="innerLi"><a href="https://www.healthyplace.com/psychological-tests/alcoholism-test">Alcoholism Test</a></li>
                            <li className="innerLi"><a href="https://www.healthyplace.com/psychological-tests/drug-abuse-screening-test">Drug Abuse Screening Test</a></li>
                            <li className="innerLi"><a href="https://www.healthyplace.com/psychological-tests/sexual-addiction-screening-test-women">Sexual Addiction Screening Test</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="linkList">
                <ul>
                    <li className="outerLi"> Eating Disorders
                        <ul>
                            <li className="innerLi"><a href="https://www.healthyplace.com/psychological-tests/eating-disorders-assessment-test">Eating Disorders</a></li>
                            <li className="innerLi"><a href="https://www.healthyplace.com/eating-disorders/anorexia-nervosa/anorexia-test-am-i-anorexic">Am I Anorexic?</a></li>
                            <li className="innerLi"><a href="https://www.healthyplace.com/eating-disorders/bulimia-nervosa/bulimia-test-am-i-bulimic">Am I Bulimic?</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="linkList">
                <ul>
                    <li className="outerLi"> Personality Disorder Tests
                        <ul>
                            <li className="innerLi"><a href="https://www.healthyplace.com/psychological-tests/psychopath-test.-am-i-a-psychopath">Psychopath Test</a></li>
                            <li className="innerLi"><a href="https://www.healthyplace.com/psychological-tests/borderline-personality-disorder-test">Borderline Personality Disorder</a></li>
                            <li className="innerLi"><a href="https://www.healthyplace.com/psychological-tests/sociopath-test-am-i-a-sociopath">Sociopath Test</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="linkList">
                <ul>
                    <li className="outerLi"> Sleep Disorders
                        <ul>
                            <li className="innerLi"><a href="https://www.healthyplace.com/psychological-tests/sleep-disorders-test">Sleep Disorders Test</a></li>
                            <li className="innerLi"><a href="https://www.healthyplace.com/psychological-tests/insomnia-test-do-i-have-insomnia">Insomnia Test</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="illustrationTest">
                <image></image>
            </div>
        </div>
    </div>


}

export default TestsList;