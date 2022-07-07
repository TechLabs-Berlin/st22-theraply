import React from 'react';
import placeholderImg from '../placeholder-image.png';
import './TextGrid.css';

function TextGrid() {
    return (
        <div className='textGrid'>
            <h1>The Process explained</h1>
            <div className='TBox0'>
                Theraply is a platform that aims to simplify the search for a suitable therapist. Many people simply aren’t fortunate enough to be able to pay privately for therapy. This post will attempt to break down the process of finding a therapist through your public health insurance.
                It’s quite unique for Germany that the public health insurance will cover the costs of psychotherapy. Unfortunately, finding a therapist who speaks English and can be covered by your insurance can be so difficult that it leaves people seeking therapy both confused and distressed. That’s why we’ve distilled the notoriously kafkaesque process into 5 steps.
            </div>
            <div className='TBox1'>
                First step: clearly the most difficult, because where do you start your search for a fitting psychotherapist who speaks your language? You can consult your GP (in German called Hausarzt), search the internet by going through the list on KV Berlin (choose “Für Patienten” then “Arzt- und Psychotherapeutensuche” and choose English in the box “Fremdsprachen”) or PsychInfo, or your specific insurance might have a list of approved psychotherapists.
            </div>
            <div className='TBox2'>
                <section>
                    Second step: When you find someone who could be the right fit, call them or write a short email to them and hear if they have time. There are often long waiting lists, with an average of 3 months, and some will not get back to you at all, or they’ll say that they are not taking any new clients. If they have no availability, ask if they can recommend a colleague or continue your search. In case no one can offer you appointments within a reasonable time frame (of approximately a month), jump past step 3-5 and read how to get cost-transfer for psychotherapy from out-of-network practitioners.
                </section>
            </div>
            <div className='TBox3'>
                Third step: when you have found someone with availability soon enough, the first four meetings are the so-called “Probesitzungen”, or trial sessions, where you find out whether you want to continue the process or find a better matching therapist.
                Fourth step: When you then agree to continue the process, the psychotherapist will write an application to your health insurance company, which then grants a certain number of times. Once the application has been processed after a few weeks, the therapy can be continued.
            </div>
            <div className='TBox4'>
                Fifth step: If the therapy needs to be extended, the psychotherapist has to write a new application, but this is just a matter of formalia. When you have come so far in the course of therapy that you do not need further therapy, you agree with the therapist to end. You don’t have to use all the granted therapy sessions. If you want to use the therapy hours you have left, it must be done within six months of the last session —in other words, you can have one session every six months to keep the remaining hours you’ve been allocated. When you have no remaining therapy hours left, or if more than half a year goes by after the last therapy session, you have to “start over”, which means that the therapist (either the same one or another) has to apply for coverage from your health insurance company once again. But the earliest that you can have more therapy sessions granted is two years after your last session.
            </div>
            <div className='TBox5'>
                Out-of-network reimbursement (“Kostenerstattung”)

                Now, there is a risk that you won’t be able to find an English-speaking therapist who is approved by the public health insurance, in German called the Gesetzliche Krankenversicherung (GKV). But actually there is a way to get the cost transferred for state-licensed therapists who are not affiliated with the insurance. These psychotherapists have the same level of training as the GVK-approved “Kassentherapeuten”, and they carry a so-called Approbation license, but since they don’t have the “Kassensitz” they aren’t automatically covered by health insurance.

                Fortunately, the public insurance companies, such as TK, are legally obliged to cover the fees if psychotherapy is necessary and urgent and if you can prove that you have tried to contact several “Kassentherapeuten”. You can read all about this procedure of reimbursement (“Kostenerstattung”) here.

                Basically the reimbursement procedure requires you to first contact your public health insurance company to ask them about any therapists within their system with free spots. If this isn’t successful, you should contact several therapists (5 should be enough) that have the “Kassensitz” (read step 1 above) and document their response (e.g.: “contacted therapist x: didn’t answer; therapist y: 3 months waiting list; therapist z: doesn’t take new patients at all”).
                Since 2017, the insurance companies often also require that you go to a “Sprechstunde”, which is a one-off assessment session with a contract therapist to confirm the need for therapy. This appointment is arranged by the Terminservicestelle, which is the central office that’s suppose to help you find a therapist within four weeks after the initial inquiry. First ask your insurance if this is needed though. Sometimes an appointment with your GP/house doctor is all that they want to reimburse.

                When you have the confirmation from the contract therapist or doctor, you can make an appointment with an out-of-network but still state-licensed “psychological psychotherapist” (this is the title practitioners acquire when they have the Approbation license). Finding an appointment with a psychological psychotherapist without a Kassensitz is much easier than finding a contract therapist who will take you on.

                Paying privately

                If the procedure of cost transfer seems too complicated and you do have the financial means, paying privately is always an option for out-of-network therapists. Even though it’s the health insurance’s responsibility to provide and cover necessary treatment, the therapy that they offer to cover is restricted to cognitive-behavioural-therapy, psychodynamic therapy and psychoanalysis. The health insurance providers are also only obliged to cover the treatment of mental health issues that are both urgent and severe.

                The benefits of self-payment as opposed to therapy covered by the health insurance provider is therefore that you can choose freely which therapeutic method you prefer and how long the process should last. Of course less bureaucracy and anonymity, in the sense that no documentation of personal data and diagnoses are given to official administrations, are clear advantages as well.
            </div>
        </div>
    )
}

export default TextGrid;