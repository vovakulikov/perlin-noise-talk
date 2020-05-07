import React from 'react';
import styled from 'styled-components';
import CodeSurfer from 'code-surfer';

const CustomCode = (props) => {
	const { lines = [] } = props;
	const step = lines.length ? { lines } : {};

	return (
		<CodeWrapper>
			<CodeSurfer
				lang="javascript"
				showNumbers
				dark
				code={props.code || ''}
				step={step}
			/>
		</CodeWrapper>
	);
};


const CodeWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin: 40px 0 20px 0;
  height: 100%;
`

export default CustomCode;
