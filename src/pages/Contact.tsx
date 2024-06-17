import {
  AlertIcon,
  CopyIcon,
  SendIcon,
  SuccessIcon,
} from "../components/Icons";
import MainBtn from "../components/MainBtn";
import { useAppState } from "../store/app-state";
import { useRef } from "react";
import { contactTextContent } from "../utils/text-content";
import SocialsContainer from "../components/SocialsContainer";
import { useFormHandler } from "../hooks/useFormHandler";
import { useState } from "react";

function Contact() {
  const { lang, theme } = useAppState();
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);
  const [sending, setSending] = useState(false);
  const [alert, setAlert] = useState(["", false]);

  const { sendMessage } = useFormHandler();

  const textContent = contactTextContent(lang);

  const inputClass = ` bg-transparent border-b-2 font-medium ${
    theme
      ? "placeholder:text-[#f0f0f055] text-[#f0f0f0] border-[#f0f0f015] focus:border-[#f0f0f0]"
      : "placeholder:text-[#00000055] text-[#000000] border-[#00000015] focus:border-[#000000]"
  } `;

  const handleSend = async () => {
    if (alert[0] !== "") return;

    setSending(true);
    const res = await sendMessage(
      name.current?.value || "",
      email.current?.value || "",
      message.current?.value || ""
    );
    setSending(false);

    setAlert([res, true]);
    if (
      (res === "Message sent successfully" ||
        res === "Mensaje enviado con éxito") &&
      name.current?.value &&
      email.current?.value &&
      message.current?.value
    ) {
      name.current.value = "";
      email.current.value = "";
      message.current.value = "";
    }
    setTimeout(() => {
      setAlert([res, false]);
      setTimeout(() => {
        setAlert(["", false]);
      }, 650);
    }, 3000);
  };

  const copyMail = () => {
    navigator.clipboard.writeText("brunominighin@gmail.com");
    if (alert[0] !== "") return;
    lang
      ? setAlert(["Copied to clipboard", true])
      : setAlert(["Copiado al portapapeles", true]);
    setTimeout(() => {
      lang
        ? setAlert(["Copied to clipboard", false])
        : setAlert(["Copiado al portapapeles", false]);
      setTimeout(() => {
        setAlert(["", false]);
      }, 650);
    }, 2000);
  };

  return (
    <main>
      <div
        className={`fixed flex items-center gap-4 w-fit rounded-full max-w-[85vw] bg-gradient-to-br from-[#090909] to-[#151515] border bottom-5 px-5 py-3 transition-all ${
          alert[1] ? "left-5" : "left-[-500px]"
        } ${
          theme
            ? "border-[#181818]"
            : "text-[#f0f0f0] shadow-md shadow-[#00000029] border-[#fff0]"
        } max-[500px]:rounded-md max-[600px]:text-[14px] max-[600px]:font-medium transition-all duration-500`}
      >
        <div className="min-w-[20px]">
          {alert[0] === "Message sent successfully" ||
          alert[0] === "Mensaje enviado con éxito" ||
          alert[0] === "Copied to clipboard" ||
          alert[0] === "Copiado al portapapeles" ? (
            <SuccessIcon w="20px" h="20px" className="" />
          ) : (
            <AlertIcon w="20px" h="20px" className="" />
          )}
        </div>
        <p>{alert}</p>
      </div>
      <h1>{textContent.h1}</h1>

      <div className="w-full flex gap-[8vw] h-fit max-[655px]:flex-col">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="w-full grow flex flex-col gap-4"
        >
          <p className="mb-2">
            {textContent.p}{" "}
            <strong className="flex gap-1 items-center">
              brunominighin@gmail.com
              <CopyIcon
                w="18px"
                h="18px"
                className="cursor-pointer active:scale-[0.95]"
                click={copyMail}
              />
            </strong>
          </p>
          <div className="w-full flex gap-4 flex-wrap">
            <input
              ref={name}
              autoComplete="none"
              maxLength={20}
              placeholder={lang ? "Name" : "Nombre"}
              type="text"
              className={`h-[40px] w-[35%] max-[490px]:w-full ${inputClass}`}
            />
            <input
              ref={email}
              autoComplete="none"
              maxLength={40}
              placeholder="Email"
              type="text"
              className={`grow h-[40px] max-[490px]:w-full ${inputClass}`}
            />
          </div>
          <textarea
            ref={message}
            autoComplete="none"
            maxLength={200}
            className={`w-full ${inputClass} h-[150px]`}
            placeholder={lang ? "Message" : "Mensaje"}
          />
          <MainBtn
            text={lang ? textContent.callToAct : textContent.callToAct}
            className="self-end pr-[0px] pl-2 mt-2"
          >
            <SendIcon
              w="20px"
              h="20px"
              className={`relative right-1 ${
                sending
                  ? "translate-x-[100px] translate-y-[-100px] opacity-0 absolute"
                  : "translate-x-[0px] translate-y-[0px] opacity-100"
              } ${alert[0] === "" ? "transition-all duration-700" : ""}`}
            />
          </MainBtn>
        </form>
        <SocialsContainer className="items-center justify-center min-[656px]:flex-col max-[655px]:mt-16" />
      </div>
    </main>
  );
}

export default Contact;
