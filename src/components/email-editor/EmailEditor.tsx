import { Bold, Eraser, Italic, Underline } from 'lucide-react'
import styles from './EmailEditor.module.scss'
import { useEditor } from './useEditor'
import parse from 'html-react-parser';
import { emailService } from '../../services/email.service'
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function EmailEditor() {

  const { applyFormat, text, updateSelection, setText, textRef } = useEditor()

	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['create email'],
		mutationFn: () => emailService.sendEmail(text),
		onSuccess() {
			setText('')
			queryClient.refetchQueries({ queryKey: ['email list'] })
		},
	})


  return (
    <div>
        <h1>Email Editor</h1>
        {text && <div className={styles.preview}>{parse(text)}</div>}
        <div className={styles.card}> 
          <textarea 
          ref={textRef}
          className={styles.editor} 
          spellCheck='false'
          onClick={updateSelection}
          value={text}
          onChange={e => setText(e.target.value)}
          >
            {text}
          </textarea>
          <div className={styles.action}>
            <div className={styles.tools}>
              <button onClick={() => setText('')}><Eraser size={17}/></button>
              <button onClick={() => applyFormat('bold')}><Bold size={17}/></button>
              <button onClick={() => applyFormat('italic')}><Italic size={17}/></button>
              <button onClick={() => applyFormat('underline')}><Underline size={17}/></button>
            </div>
            <button  disabled={isPending} onClick={() => mutate()}>Send now</button>
          </div>
        </div>
    </div>
  )
}
