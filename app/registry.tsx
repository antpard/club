import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView
} from 'react-native';

export default function RegistryForm() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    console.log('Submitted Data:', data);
    setSubmittedData(data);
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="Nombre Completo"
          />
        )}
        name="name"
        rules={{ required: 'Tu nombre completo es requerido' }}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}

      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="DNI / NIE / Passport"
          />
        )}
        name="cardId"
        rules={{ required: 'DNI / NIE / Passport requerido' }}
      />
      {errors.cardId && <Text style={styles.errorText}>{errors.cardId.message}</Text>}

      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="Correo Electrónico"
          />
        )}
        name="email"
        rules={{ required: 'Introduce tu correo electrónico', pattern: { value: /^\S+@\S+$/i, message: 'Introduce un email correcto' } }}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="Teléfono"
          />
        )}
        name="phonenumber"
        rules={{ required: 'Número de teléfono requerido' }}
      />
      {errors.phonenumber && <Text style={styles.errorText}>{errors.phonenumber.message}</Text>}

      <Button title="Enviar datos" onPress={handleSubmit(onSubmit)} />

      {submittedData && (
        <View style={styles.submittedContainer}>
          <Text style={styles.submittedTitle}>Submitted Data:</Text>
          <Text>Name: {submittedData.name}</Text>
          <Text>DNI / NIE / Passport: {submittedData.cardId}</Text>
          <Text>Email: {submittedData.email}</Text>
        </View>
      )}
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
