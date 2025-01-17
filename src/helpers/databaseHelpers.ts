import supabase from '@/utils/supabase-client';
import { ScoreRecord } from '@/types';

export async function updateScoreRecord(record: ScoreRecord, id?: number) {
  try {
    const { receipt } = record;
    const updatedData = { ...record };
    // Updates data on record: Needed for changing the used receipt
    let existingData = null;
    if (!!id) {
      const { data: fetch } = await supabase
        .from('scores')
        .select('*')
        .eq('id', id)
        .single();
      existingData = fetch;
    } else {
      // searches by receipt
      const { data: fetch } = await supabase
        .from('scores')
        .select('*')
        .eq('receipt', receipt)
        .single();
      existingData = fetch;
    }
    console.log({ record, existingData });

    if (existingData) {
      // Update the existing record
      const { error: updateError } = await supabase
        .from('scores')
        .update({ ...updatedData })
        .eq('id', existingData.id);

      if (updateError) throw updateError;
    } else {
      // Insert a new record
      const { error: insertError } = await supabase
        .from('scores')
        .insert([{ ...updatedData }]);

      if (insertError) throw insertError;
    }
  } catch (error) {
    console.error('Error with Supabase operation:', error);
    throw new Error('Database operation failed');
  }
}

export async function handleReceipt(receipt: string, payer: string) {
  try {
    // Check if the receipt already exists
    const { data: usedReceipt, error: selectError } = await supabase
      .from('used_receipts')
      .select('*')
      .eq('receipt', receipt)
      .maybeSingle();
    if (selectError) throw selectError;

    if (usedReceipt && !!usedReceipt.used) {
      // If the receipt already exists, throw an error
      throw new Error('Receipt has already been used');
    } else if (!usedReceipt) {
      // If the receipt does not exist, insert it into the database
      const { error: insertError } = await supabase
        .from('used_receipts')
        .insert([{ receipt, payer, used: false }]);

      if (insertError) throw insertError;
    }
    return true;
  } catch (error) {
    console.error('Error with Supabase operation:', error);
    throw error;
  }
}

export async function checkPendingReceipt(payer: string) {
  try {
    const { data, error } = await supabase
      .from('used_receipts')
      .select('receipt')
      .eq('payer', payer)
      .eq('used', false)
      .maybeSingle();

    if (error) {
      console.error('Error checking for pending receipt:', error);
      throw error;
    }

    return data?.receipt;
  } catch (error) {
    console.error('Error checking for pending receipt:', error);
    return false;
  }
}

export async function markReceiptAsUsed(receipt: string): Promise<boolean> {
  try {
    const { data, error } = await supabase
      .from('used_receipts')
      .update({ used: true })
      .eq('receipt', receipt)
      .eq('used', false);

    if (error) {
      console.error('Error marking receipt as used:', error);
      throw error;
    }

    return data !== null;
  } catch (error) {
    console.error('Error marking receipt as used:', error);
    throw error;
  }
}

export default {
  updateScoreRecord,
  handleReceipt,
  markReceiptAsUsed,
};
