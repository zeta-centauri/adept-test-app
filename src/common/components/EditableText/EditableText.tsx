import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface Props {
  initialValue: string;
  onSave: (value: string) => void;
}

const EditableText = ({ initialValue, onSave }: Props) => {
  const [value, setValue] = useState(initialValue);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    onSave(value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <StyledInput
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      rows={1}
    />
  );
};

export default EditableText;

const StyledInput = styled.textarea`
  width: 100%;
  padding: 0.5rem 0 0.5rem 0;
  min-width: 100px;

  border: none;

  resize: none;
  overflow: hidden;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  box-sizing: border-box;

  background-color: transparent;
`;
