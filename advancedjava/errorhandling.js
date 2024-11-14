It won’t work if the code is syntactically wrong. try {
    const error = "mismatched quotes'
    } catch (error) {
    console.log('will not catch above error')
    }
    // SyntaxError: Invalid or unexpected token - doesn't go to catch block

    