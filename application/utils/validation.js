import t from 'tcomb-form-native';

export default formValidation = {
        email:t.refinement(t.string, (s)=>{
            return /@/.test(s);
        }),
        password:t.refinement(t.string, (s)=>{
            return s.length()>=6;
        }),
};
