import { useState } from "react";

function AIAssistant() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    try {
      setLoading(true);
      setError("");
      setReply("");

      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "AI request failed");
      }

      setReply(data.reply);
    } catch (err) {
        console.error(err);
      setError("Unable to connect to the AI assistant.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-10">
          <p className="text-blue-600 font-bold text-sm tracking-widest mb-3">
            AI MEDICAL ASSISTANT
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ask Our AI Assistant
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Ask general questions about appointments, specialties, and
            healthcare information.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 md:p-8">

          <form onSubmit={handleSubmit}>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Question
            </label>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Example: Which doctor should I book for skin problems?"
              rows="5"
              className="w-full px-5 py-4 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white py-4 rounded-xl font-bold transition"
            >
              {loading ? "AI is thinking..." : "Ask AI"}
            </button>

          </form>

          {error && (
            <div className="mt-6 bg-red-50 border border-red-200 text-red-600 rounded-xl p-4">
              {error}
            </div>
          )}

          {reply && (
            <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  AI
                </div>

                <h2 className="font-bold text-gray-900">
                  AI Assistant
                </h2>
              </div>

              <p className="text-gray-700 leading-7 whitespace-pre-wrap">
                {reply}
              </p>
            </div>
          )}

          <div className="mt-6 text-sm text-gray-400 text-center">
            AI provides general information and does not replace a qualified
            medical professional.
          </div>

        </div>
      </div>
    </main>
  );
}

export default AIAssistant;